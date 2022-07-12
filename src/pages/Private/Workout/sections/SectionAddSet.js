import React from "react";

import Section from "../../../../components/Misc/Section";
import WorkoutCardRepetitions from "../components/WorkoutCardRepetitions";

const SectionAddSet = ({ workoutObject }) => {
  return (
    <Section>
      <Section.Header>Sets</Section.Header>
      <Section.Body>
        <div className="workout-sets__container">
          {Object.entries(workoutObject).map(
            ([workoutExercise, exerciseObject]) => {
              if (exerciseObject.exercise.type === "Repetitions") {
                return (
                  <div key={workoutExercise}>
                    <WorkoutCardRepetitions exerciseObject={exerciseObject} />
                  </div>
                );
              } else {
                return <div key={workoutExercise}>Feature in progress</div>;
              }
            }
          )}
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddSet;
