import React, { useContext, useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import { WorkoutContext } from "../../../../contexts/workoutContext";
import { resolve } from "../../../../services/utils";

import SetsService from "../../../../services/sets";

import WorkoutExerciseAmount from "./WorkoutExerciseAmount";
import WorkoutExerciseSet from "./WorkoutExerciseSet";
import StatsCard from "../../../../components/Stats/StatsCard";
import AccordionCard from "../../../../components/Cards/AccordionCard";

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
