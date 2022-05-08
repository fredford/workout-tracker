import React from "react";
import Card from "../../../../components/Cards/Card";

const SectionAddSet = ({ exercises, newExercise, setNewExercise }) => {
  return (
    <Card className="flex-grow-1">
      <Card.Body>
        <Card.Title>Exercise</Card.Title>
        <Card.Subtitle className="text-muted">
          Choose an exercise to add to the workout
        </Card.Subtitle>
        <div className="workout-exercises__group">
          {React.Children.toArray(
            exercises.map((exercise) => {
              return (
                <div
                  className="workout-exercises__exercise"
                  onClick={() => setNewExercise(exercise)}
                >
                  <h5>{exercise.name}</h5>
                  <h6>{exercise.type}</h6>
                </div>
              );
            })
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionAddSet;
