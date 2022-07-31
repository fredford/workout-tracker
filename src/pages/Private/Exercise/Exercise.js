import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import {
  selectExerciseById,
  setExercises,
} from "../../../redux/reducers/exercises";
import ExerciseInfo from "./sections/ExerciseInfo";
import Button from "../../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

import ExercisesServices from "../../../services/exercises";
import StatsService from "../../../services/stats";

import CumulativeChart from "./components/CumulativeChart";
import SetProgressionChart from "./components/SetProgressionChart";
import WorkoutProgressionChart from "./components/WorkoutProgressionChart";
import ChallengesCard from "./components/ChallengesCard";
import api from "../../../services/sendRequest";

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

  useEffect(() => {
    retrieveData();
  }, []);

  // Retrieve the stats for the Exercise
  const retrieveData = async () => {
    api.fetch(StatsService.getExerciseData(exerciseId), (data) => {
      setExerciseStats(data);
      setShowStats(true);
    });
  };

  // Function to handle deleting the Exercise
  const deleteExercise = async () => {
    api.request(
      ExercisesServices.deleteExercise(exerciseId),
      () => {
        navigate("/message/exercisedeletesuccess");
      },
      () => {
        navigate("/message/exercisedeletefailed");
      }
    );
  };

  return (
    <Page navbar>
      <Page.Body>
        <Button border path="/exercises" className="w-100">
          <Button.Text>Back to Exercises</Button.Text>
        </Button>

        <div className="mb-3 mt-3">
          <ExerciseInfo exercise={exercise} stats={exerciseStats.stats} />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
            <CumulativeChart
              stats={exerciseStats.cumulative}
              showStats={showStats}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
            <SetProgressionChart
              stats={exerciseStats.setProgression}
              showStats={showStats}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
            <WorkoutProgressionChart
              stats={exerciseStats.workoutProgression}
              showStats={showStats}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
            <ChallengesCard />
          </div>
          <div className="col-sm-12 col-md-6 col-xxl-4 card-margin">
            <Card>
              <Card.Header>Settings</Card.Header>
              <Card.Body className="mt-3">
                <Button
                  border
                  accent
                  onClick={deleteExercise}
                  className="w-100 btn-danger"
                >
                  <Button.Text>Delete</Button.Text>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Exercise;
