import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { selectExerciseById } from "../../../redux/reducers/exercises";
import ExerciseInfo from "./sections/ExerciseInfo";
import Button from "../../../components/Buttons/Button";
import { resolve } from "../../../services/utils";
import { useNavigate } from "react-router-dom";

import ExercisesServices from "../../../services/exercises";
import StatsCard from "../../../components/Stats/StatsCard";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Exercise = () => {
  const navigate = useNavigate();
  // TODO fill in cards and separate into component files

  let { exerciseId } = useParams();

  const exercise = useSelector((state) =>
    selectExerciseById(state, exerciseId)
  );

  const user = useSelector((state) => state.user);

  if (exercise) {
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }

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

  const tempData = {
    stats: {
      Total: 100,
      Avg: 20,
      Max: 25,
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
  };

  const dataCumulative = {
    labels: Object.keys(tempData.cumulative),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(tempData.cumulative),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  const dataWorkout = {
    labels: Object.keys(tempData.workoutProgression),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(tempData.workoutProgression),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  const dataSet = {
    labels: Object.keys(tempData.setProgression),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(tempData.setProgression),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  const optionsSet = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
        },
      },
    },
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
                    {Object.keys(tempData.stats).map((key) => (
                      <StatsCard
                        key={key}
                        data={tempData.stats[key]}
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
                <Card.Body>
                  <Line data={dataCumulative} options={options} />
                </Card.Body>
              </Card>
            </div>

            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Set Progression</Card.Header>
                <Card.Body>
                  <Line data={dataSet} options={optionsSet} />
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Workout Progression</Card.Header>
                <Card.Body>
                  <Line data={dataWorkout} options={options} />
                </Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Settings</Card.Header>
                <Card.Body>
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
