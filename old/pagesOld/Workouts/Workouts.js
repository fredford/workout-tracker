import React, { useEffect, useState } from "react";
import Page from "../Page/Page";
import Card from "../../components/cards/Card";
import Progression from "./Progression/Progression";
import Calendar from "react-calendar";

import { resolve } from "../../services/utils";

import WorkoutsService from "../../services/workouts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Workouts() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);
  const user = useSelector((state) => state.user);
  const [workoutsList, setWorkoutsList] = useState([]);

  useEffect(() => {
    retrieveAllWorkouts();
  }, []);

  const retrieveAllWorkouts = async () => {
    const [data, error] = await resolve(WorkoutsService.getAll());
    if (data) {
      setWorkoutsList(data);
    }
  };

  const startNewWorkout = async (e) => {
    console.log(e.target.id);
    const [data, error] = await resolve(
      WorkoutsService.createWorkout({
        type: e.target.id,
        user: user._id,
      })
    );
    if (data) {
      navigate(`/workouts/${data._id}`);
    }
  };

  return (
    <Page>
      <div className="row mt-3">
        <div className="col-12 mb-3">
          <h3 className="mb-3">Start New Workout</h3>
          <div className="workouts__workout-type-group">
            <button id="Maintenance" onClick={startNewWorkout}>
              <img src="./maintenance.png" alt="" />
              Maintenance
            </button>
            <button id="Progression" onClick={startNewWorkout}>
              <img src="./progression.png" alt="" />
              Progression
            </button>
            <button id="Single Set Max" onClick={startNewWorkout}>
              <img src="./max.png" alt="" />
              Single Set Max
            </button>
          </div>
        </div>
        {/*<div className="col-12 stretch-card mb-3">
          <Card><Calendar className="workout-calendar" /></Card>
        </div>
        */}
        <div className="col-12">
          <Card>
            <h4>Workout History</h4>
            <div className="row">
              {React.Children.toArray(
                workoutsList.map((workout) => {
                  var date = new Date(workout.date);

                  var image = workout.type;

                  return (
                    <div
                      className=" col-sm-6 workout-list__margins"
                      onClick={() => navigate(`/workouts/${workout._id}`)}
                    >
                      <div className="workout-list__item">
                        <img
                          className="workout-list__image"
                          src={workoutTypeImg[workout.type]}
                          alt=""
                        />
                        <div className="workout-list__text">
                          <h5>{date.toDateString()}</h5>
                          <h6 className="text-muted">{workout.type}</h6>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
}

const workouts = [
  {
    id: "1283012j1odd10duksd",
    date: "2022/3/10 9:50PM",
    type: "Progression",
  },
  {
    id: "1283012j1odd8f0a9sdfd",
    date: "2022/3/9 9:50PM",
    type: "Single Set Max",
  },
  {
    id: "128fasdjfkla1duksd",
    date: "2022/3/8 9:50PM",
    type: "Light",
  },
];

const workoutTypeImg = {
  Progression: "./progression.png",
  Maintenance: "./maintenance.png",
  "Single Set Max": "./max.png",
};
