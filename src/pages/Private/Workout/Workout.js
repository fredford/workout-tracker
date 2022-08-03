// Library imports
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Local component imports
import Page from "../../../components/Misc/Page";
import SectionAddExercise from "./sections/SectionAddExercise";
import SectionWorkoutInfo from "./sections/SectionWorkoutInfo";
import SectionAddSet from "./sections/SectionAddSet";
import Button from "../../../components/Buttons/Button";

// Local services
import services from "../../../services/services";

// Contexts
import { WorkoutContext } from "../../../contexts/workoutContext";

/**
 * Page that displays a User Workout and the Exercises and Sets associated to it
 * @returns {JSX.Element}
 * @constructor
 */
const Workout = () => {
  // Context for current Workout
  const contextData = useContext(WorkoutContext);
  const [sets, setSets] = contextData.sets;
  const [workout, setWorkout] = contextData.workout;
  // Component state
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSets, setTotalSets] = useState(0);
  // WorkoutId passed in URL parameters
  const { workoutId } = useParams();

  // Function for setting a new exercise to the list of exercises with sets
  const changeNewExercise = (exercise) => {
    setNewExercise(exercise);
  };

  let stringSets = JSON.stringify(sets)
  useEffect(() => {
    const retrieveData = async () => {
      // Retrieve the workout information
      await services.workouts.getById(workoutId, setWorkout);
      // Retrieve the sets associated to this workout and set the total sets and amount done
      await services.workout.getAll(workoutId,
        (data) => {
          setSets(data)
          let amount = data.reduce((sum, a) => sum + Number(a.amount), 0);
          setTotalAmount(amount);
          setTotalSets(data.length);
        })
    };
    retrieveData();
  }, [stringSets, setSets, setWorkout, workoutId]);

  // Function for retrieving data for the current workout


  // Variable for the new exercise selected
  const [newExercise, setNewExercise] = useState("");

  // List of all exercises
  const exercises = useSelector((state) => state.exercises.exercises);

  // List of Exercises used in the Workout
  let listOfWorkoutExercises = [];

  // Object to store all data on the workout
  let workoutObject = {};

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
    let setsGroupedByExercise = groupBy(sets, "name");

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
  let availableExercises = exercises.filter(
    (exercise) => !listOfWorkoutExercises.includes(exercise.name)
  );

  return (
    <Page navbar>
      <Page.Body className="grid-margin">
        <Button border path="/workouts" className="w-100">
          <Button.Text>Back to Workouts</Button.Text>
        </Button>
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

/**
 * Function to group a list by a key
 * @param xs list to be sorted and reduced
 * @param key the key that the list should be sorted by
 * @returns {object} object containing the keys and the sets associated
 */
const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x.exercise[key]] = rv[x.exercise[key]] || []).push(x);
    return rv;
  }, {});
};

export default Workout;
