import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import NoStatsOverlay from "../../../components/Misc/NoStatsOverlay";
import {
  selectExerciseById,
  setExercises,
} from "../../../redux/reducers/exercises";
import ExerciseInfo from "./sections/ExerciseInfo";
import Button from "../../../components/Buttons/Button";
import { resolve } from "../../../services/utils";
import { useNavigate } from "react-router-dom";

import ExercisesServices from "../../../services/exercises";
import StatsService from "../../../services/stats";
import StatsCard from "../../../components/Stats/StatsCard";
import StatsLineChart from "../../../components/Stats/StatsLineChart";

const Exercise = () => {
  const [exerciseStats, setExerciseStats] = useState({
    stats: {
      Total: "-",
      Avg: "-",
      Max: "-",
    },
    cumulative: {
      "2022-6-21": 40,
      "2022-6-22": 60,
      "2022-6-24": 90,
    },
    workoutProgression: {
      "2022-6-21": 40,
      "2022-6-22": 20,
      "2022-6-24": 30,
    },
    setProgression: {
      "2022-6-21 Set 1": 15,
      "2022-6-21 Set 2": 25,
      "2022-6-22 Set 1": 20,
      "2022-6-22 Set 2": 30,
      "2022-6-24 Set 1": 20,
      "2022-6-24 Set 2": 35,
    },
  });

  const [showStats, setShowStats] = useState(false);
  const navigate = useNavigate();

  let { exerciseId } = useParams();

  const exercise = useSelector((state) =>
    selectExerciseById(state, exerciseId)
  );

  const user = useSelector((state) => state.user);

  if (exercise) {
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(
      StatsService.getExerciseData(exerciseId)
    );

    if (data) {
      setExerciseStats(data);
      setShowStats(true);
    } else {
      console.log(error);
    }
  };

  const deleteExercise = async () => {
    const [data, error] = await resolve(
      ExercisesServices.deleteExercise(user._id, exerciseId)
    );

    if (data) {
      navigate("/message/exercisedeletesuccess");
    } else {
      console.log(error);
      navigate("/message/exercisedeletefailed");
    }
  };

  const dataCumulative = {
    labels: Object.keys(exerciseStats.cumulative),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(exerciseStats.cumulative),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  const dataWorkout = {
    labels: Object.keys(exerciseStats.workoutProgression),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(exerciseStats.workoutProgression),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  const dataSet = {
    labels: Object.keys(exerciseStats.setProgression),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(exerciseStats.setProgression),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Body navbar>
        <div className="mb-3">
          <ExerciseInfo />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6 card-margin">
              <Card>
                <Card.Header className="mb-3">Stats</Card.Header>
                <Card.Body>
                  <div className="grid-3-item">
                    {Object.keys(exerciseStats.stats).map((key) => (
                      <StatsCard
                        key={key}
                        data={exerciseStats.stats[key]}
                        title={key}
                      />
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Challenges</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Cumulative</Card.Header>
                <Card.Body className="mt-3">
                  <StatsLineChart
                    data={dataCumulative}
                    options={"standard"}
                    show={showStats}
                  />
                </Card.Body>
              </Card>
            </div>

            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Set Progression</Card.Header>
                <Card.Body className="mt-3">
                  <StatsLineChart
                    data={dataSet}
                    options={"no-x"}
                    show={showStats}
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Workout Progression</Card.Header>
                <Card.Body className="mt-3">
                  <StatsLineChart
                    data={dataWorkout}
                    options={"standard"}
                    show={showStats}
                  />
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Settings</Card.Header>
                <Card.Body className="mt-3">
                  <Button onClick={deleteExercise} className="w-100 btn-danger">
                    <Button.Text>Delete</Button.Text>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <Button path="/exercises" className="w-100">
            <Button.Text>Back to Exercises</Button.Text>
          </Button>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Exercise;
