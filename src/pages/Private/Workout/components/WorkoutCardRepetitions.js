import React from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";

import WorkoutExerciseAmount from "./WorkoutExerciseAmount";
import WorkoutExerciseSet from "./WorkoutExerciseSet";

const WorkoutCardRepetitions = ({ exerciseObject }) => {
  var sets = exerciseObject.sets;
  var exercise = exerciseObject.exercise;

  const sumSets = sets.reduce((n, { amount }) => {
    return Number(amount) + n;
  }, 0);

  const avgSets = Math.round((sumSets / sets.length) * 10) / 10;
  const maxSet = Math.max(...sets.map((o) => Number(o.amount)), 0);

  const addSet = () => {};

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
              <Button.Text>Add</Button.Text>
            </Button>
          </div>
        </div>
        <Card.Bar className="mt-0" />
        <WorkoutExerciseAmount />
        <Card.Bar />

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
