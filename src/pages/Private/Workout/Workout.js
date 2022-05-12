import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import WorkoutsService from "../../../services/workouts";
import SetsService from "../../../services/sets";
import WorkoutService from "../../../services/workout";
import SectionAddExercise from "./sections/SectionAddExercise";
import { useDispatch, useSelector } from "react-redux";

import SectionWorkoutInfo from "./sections/SectionWorkoutInfo";
import SectionAddSet from "./sections/SectionAddSet";

const Workout = () => {
  const { workoutId } = useParams();
  const [workout, setWorkout] = useState({
    date: "...",
    type: "...",
  });

  const changeNewExercise = (exercise) => {
    setNewExercise(exercise);
  };

  const [sets, setSets] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSets, setTotalSets] = useState(0);

  useEffect(() => {
    retrieveData();
  }, [JSON.stringify(sets)]);

  const retrieveData = async () => {
    const [dataWorkout, errorWorkout] = await resolve(
      WorkoutsService.getById(workoutId)
    );
    const [dataSets, errorSets] = await resolve(
      WorkoutService.getAll(workoutId)
    );
    setWorkout(dataWorkout[0]);
    setSets(dataSets);

    let amount = dataSets.reduce((sum, a) => sum + Number(a.amount), 0);
    setTotalAmount(amount);
    setTotalSets(dataSets.length);
  };

  const [outputAmount, setOutputAmount] = useState("");
  const [outputIndex, setOutputIndex] = useState("");

  const addSet = async (index) => {
    if (index === outputIndex) {
      const exercise = exercises.find(
        (element) =>
          element.name === Object.keys(exercisesInSetsArray[index])[0]
      );

      var newSet = {};
      newSet["exerciseId"] = exercise._id;
      newSet["workoutId"] = workoutId;
      newSet["amount"] = outputAmount;

      const [data, error] = await resolve(SetsService.createSet(newSet));

      var newSets = [...sets];
      if (data) {
        newSets.push(data);
      }

      setSets(newSets);
    }
  };

  const updateSets = (set) => {
    var newSets = sets.filter((s) => s._id !== set._id);
    setSets(newSets);
  };

  // Variable for the new exercise selected
  const [newExercise, setNewExercise] = useState("");

  // List of all exercises
  const exercises = useSelector((state) => state.exercises.exercises);
  // Set the list of available exercises

  // List of Exercises used in the Workout
  var listOfWorkoutExercises = [];

  // Set the list of set exercises to be shown
  var exercisesInSetsArray = [];

  // Object to store all data on the workout
  var workoutObject = {};

  // If an Exercise is selected, add it to the list for display
  if (newExercise !== "") {
    workoutObject[newExercise.name] = {
      exercise: newExercise,
      sets: [],
    };
    listOfWorkoutExercises.push(newExercise.name);
  }

  // If there are Sets added to the Workout
  if (sets.length > 0) {
    var setsGroupedByExercise = groupBy(sets, "name");

    // Create the workoutObject containing the Exercise and Sets associated
    for (const [key, value] of Object.entries(setsGroupedByExercise)) {
      workoutObject[key] = {
        exercise: value[0].exercise,
        sets: value,
      };
      listOfWorkoutExercises.push(key);
    }
  }

  // Filter exercises being performed from the available list
  var availableExercises = exercises.filter(
    (exercise) => !listOfWorkoutExercises.includes(exercise.name)
  );

  return (
    <Page>
      <Page.NavBar />
      <Page.Body navbar container>
        <SectionWorkoutInfo
          workout={workout}
          totalAmount={totalAmount}
          totalSets={totalSets}
        />
        <SectionAddExercise
          exercises={availableExercises}
          newExercise={newExercise}
          setNewExercise={changeNewExercise}
        />
        <SectionAddSet workoutObject={workoutObject} />
      </Page.Body>
    </Page>
  );
};

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x.exercise[key]] = rv[x.exercise[key]] || []).push(x);
    return rv;
  }, {});
};

export default Workout;
