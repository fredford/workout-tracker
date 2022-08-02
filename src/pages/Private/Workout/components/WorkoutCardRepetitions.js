// Library imports
import React, { useContext, useState } from "react";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import WorkoutExerciseAmount from "./WorkoutExerciseAmount";
import WorkoutExerciseSet from "./WorkoutExerciseSet";
import StatsCard from "../../../../components/Stats/StatsCard";
import AccordionCard from "../../../../components/Cards/AccordionCard";

// Local services
import SetsService from "../../../../services/sets";
import api from "../../../../services/sendRequest";

// Contexts
import { WorkoutContext } from "../../../../contexts/workoutContext";

/**
 * Component to display the Sets completed for the given Exercise in the Workout
 * @param exerciseObject  object containing a list of Sets associated to that Exercise
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: complete
 */
const WorkoutCardRepetitions = ({ exerciseObject }) => {
  // Context of the current Workout
  const contextData = useContext(WorkoutContext);
  const [setsList, setSetsList] = contextData.sets;
  const [workout] = contextData.workout;
  // Component state for Amount of repetitions completed
  const [amount, setAmount] = useState("0");

  // Separate the Sets from the exercise Object
  let sets = exerciseObject.sets;
  // Get the name of the exercise
  let exercise = exerciseObject.exercise;

  // Sum the repetitions in the Workout for this Exercise
  const sumSets = sets.reduce((n, { amount }) => {
    return Number(amount) + n;
  }, 0);
  // Compute the average repetitions for the Exercise in the Workout
  const avgSets = Math.round((sumSets / sets.length) * 10) / 10;
  // Compute the maximum repetitions completed in the Workout
  const maxSet = Math.max(...sets.map((o) => Number(o.amount)), 0);
  // Compute the number of sets completed
  const numSets = sets.length;

  // Function to perform adding a Set to the server
  const addSet = async () => {
    // Create Set object containing the workoutId, exerciseId and amount done
    let set = {
      workoutId: workout._id,
      exerciseId: exercise._id,
      amount: amount,
    };

    // API POST request to create a Set for the Workout
    await api.create(SetsService.createSet(set), (data) => {
      // Add Set to the context data on the Workout
      let newSets = [...setsList];
      newSets.push(data);
      setSetsList(newSets);
    }, (error) => {
      // Option to add functionality for error handling
      console.log(error)
    })
  };

  return (
    <AccordionCard className="workout-sets__cards">
      <AccordionCard.Header
        name={exercise.name}
        type={exercise.type}
        addSet={addSet}
      />
      <AccordionCard.Body className="workout-sets__body">
        <WorkoutExerciseAmount amount={amount} setAmount={setAmount} />
        <div className="workout-sets__header-button">
          <Button border className="p-3 w-100" onClick={addSet}>
            <Button.Text>Add Set</Button.Text>
          </Button>
        </div>
        <div className="mb-3 grid-4-item">
          <StatsCard data={numSets} title={"Sets"} />
          <StatsCard data={avgSets} title={"Avg"} />
          <StatsCard data={maxSet} title={"Max"} />
          <StatsCard data={sumSets} title={"Total"} />
        </div>

        <div className="workout-sets-repetitions__sets-container">
          {React.Children.toArray(
            sets.map((set, index) => {
              return (
                <WorkoutExerciseSet
                  set={set}
                  index={index}
                  setAmount={setAmount}
                />
              );
            })
          )}
        </div>
      </AccordionCard.Body>
    </AccordionCard>
  );
};

export default WorkoutCardRepetitions;
