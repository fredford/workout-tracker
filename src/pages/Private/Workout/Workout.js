import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import WorkoutsService from "../../../services/workouts";
import SetsService from "../../../services/sets";
import WorkoutService from "../../../services/workout";
import SectionAddSet from "./sections/SectionAddSet";
import { useDispatch, useSelector } from "react-redux";
import Form from "../../../components/Forms/Form";

import SectionWorkoutInfo from "./sections/SectionWorkoutInfo";
import Section from "../../../components/Misc/Section";

import WorkoutExerciseSet from "./components/WorkoutExerciseSet";
import WorkoutExerciseAmount from "./components/WorkoutExerciseAmount";

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
  var availableExercises = [...exercises];
  // Set the list of exercises in progress
  var workoutExercises = [];
  // Set the list of set exercises to be shown
  var exercisesInSetsArray = [];

  var exercisesInSetsObject = {};

  if (newExercise !== "") {
    exercisesInSetsObject[newExercise.name] = [];
  }

  if (sets.length > 0) {
    exercisesInSetsObject = Object.assign(
      exercisesInSetsObject,
      groupBy(sets, "name")
    );

    for (const [key, value] of Object.entries(exercisesInSetsObject)) {
      let obj = {};
      obj[key] = value;

      workoutExercises.push(key);

      exercisesInSetsArray.push(obj);
    }
  }

  availableExercises = availableExercises.filter(
    (exercise) => !workoutExercises.includes(exercise.name)
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
        <SectionAddSet
          exercises={availableExercises}
          newExercise={newExercise}
          setNewExercise={changeNewExercise}
        />

        <Section>
          <Section.Header>Exercises</Section.Header>
          <Section.Body>
            {Object.keys(exercisesInSetsObject).map((item, index) => {
              let array = exercisesInSetsObject[item];
              var value = "";

              const sumSets = array.reduce((n, { amount }) => {
                return Number(amount) + n;
              }, 0);

              const avgSets = Math.round((sumSets / array.length) * 10) / 10;
              const maxSet = Math.max(...array.map((o) => Number(o.amount)), 0);

              if (outputIndex === index) {
                value = outputAmount;
              }

              return (
                <div
                  key={index}
                  className="card d-flex flex-row justify-content-between mb-3"
                >
                  <div className="p-3 d-flex flex-column align-items-center">
                    <h4 className="mb-2">{item}</h4>
                    <h6>Total: {sumSets}</h6>
                    <h6>Avg: {avgSets}</h6>
                    <h6>Max: {maxSet}</h6>
                  </div>

                  <div className="p-3">
                    {React.Children.toArray(
                      array.map((set, index2) => {
                        return (
                          <WorkoutExerciseSet
                            set={set}
                            index={index2}
                            updateSets={updateSets}
                          />
                        );
                      })
                    )}
                  </div>
                  <WorkoutExerciseAmount
                    value={value}
                    index={index}
                    outputIndex={outputIndex}
                    setOutputIndex={setOutputIndex}
                    outputAmount={outputAmount}
                    setOutputAmount={setOutputAmount}
                    addSet={addSet}
                  />
                </div>
              );
            })}
          </Section.Body>
        </Section>
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
