import React from "react";

import Section from "../../../../components/Misc/Section";
import WorkoutCardRepetitions from "../components/WorkoutCardRepetitions";

const SectionAddSet = ({ workoutObject }) => {
  return (
    <Section>
      <Section.Header>Exercises</Section.Header>
      <Section.Body>
        <div className="workout-sets__container">
          {Object.entries(workoutObject).map(
            ([workoutExercise, exerciseObject]) => {
              if (exerciseObject.exercise.type === "Repetitions") {
                return (
                  <WorkoutCardRepetitions
                    key={workoutExercise}
                    exerciseObject={exerciseObject}
                  />
                );
              } else {
                return <div key={workoutExercise}></div>;
              }
            }
          )}
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddSet;
