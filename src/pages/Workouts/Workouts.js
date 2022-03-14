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
        <div className="col-md-6 mb-3">
          <Card>
            <h4>Start New Workout</h4>
            <div className="workouts__workout-type-group">
              <button id="Progression" onClick={startNewWorkout}>
                Progression
              </button>
              <button id="Single Set Max" onClick={startNewWorkout}>
                Single Set Max
              </button>
              <button id="Maintenance" onClick={startNewWorkout}>
                Maintenance
              </button>
            </div>
          </Card>
        </div>
        {/*<div className="col-md-6 stretch-card mb-3">
          <Card><Calendar className="workout-calendar" /></Card>
        </div>
        */}
        <div className="col-md-6">
          <Card>
            <h4>Workout History</h4>
            {React.Children.toArray(
              workoutsList.map((workout) => {
                return (
                  <div className="">
                    <h3>{workout.type}</h3>
                    <h4>{workout.date}</h4>
                  </div>
                );
              })
            )}
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
