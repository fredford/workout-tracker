import React, { useContext, useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import { WorkoutContext } from "../../../../contexts/workoutContext";
import { resolve } from "../../../../services/utils";

import SetsService from "../../../../services/sets";

import WorkoutExerciseAmount from "./WorkoutExerciseAmount";
import WorkoutExerciseSet from "./WorkoutExerciseSet";
import WorkoutExerciseStats from "./WorkoutExerciseStats";

const WorkoutCardRepetitions = ({ exerciseObject }) => {
  const contextData = useContext(WorkoutContext);

  const [setsList, setSetsList] = contextData.sets;
  const [workout, setWorkout] = contextData.workout;

  const [amount, setAmount] = useState("0");

  var sets = exerciseObject.sets;
  var exercise = exerciseObject.exercise;

  const sumSets = sets.reduce((n, { amount }) => {
    return Number(amount) + n;
  }, 0);

  const avgSets = Math.round((sumSets / sets.length) * 10) / 10;
  const maxSet = Math.max(...sets.map((o) => Number(o.amount)), 0);
  const numSets = sets.length;

  const addSet = async () => {
    let set = {
      workoutId: workout._id,
      exerciseId: exercise._id,
      amount: amount,
    };

    const [data, error] = await resolve(SetsService.createSet(set));

    if (data) {
      var newSets = [...setsList];
      newSets.push(data);
      setSetsList(newSets);
    } else {
      console.log(error);
    }
  };

  return (
    <Card className="workout-sets__cards">
      <Card.Body className="workout-sets__body">
        <div className="workout-sets__header">
          <div className="workout-sets__header-text">
            <h4 className="workout-sets__header-title">{exercise.name}</h4>
            <h5 className="workout-sets__header-type">{exercise.type}</h5>
          </div>
          <div className="workout-sets__header-button">
            <Button className="p-3" onClick={addSet}>
              <Button.Text>Add Set</Button.Text>
            </Button>
          </div>
        </div>
        <Card.Bar className="mt-0 mb-2" />
        <WorkoutExerciseAmount amount={amount} setAmount={setAmount} />
        <Card.Bar className="mb-2 mt-2" />
        <WorkoutExerciseStats
          numSets={numSets}
          avgSets={avgSets}
          maxSet={maxSet}
          sumSets={sumSets}
        />
        <div className="workout-sets-repetitions__sets-container">
          {React.Children.toArray(
            sets.map((set, index) => {
              return <WorkoutExerciseSet set={set} index={index} />;
            })
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorkoutCardRepetitions;
