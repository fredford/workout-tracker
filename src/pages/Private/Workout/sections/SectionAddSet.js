import React from "react";

import Section from "../../../../components/Misc/Section";
import WorkoutCardRepetitions from "../components/WorkoutCardRepetitions";
//import WorkoutCardRepetitions from "../components/WorkoutCardRepetitions";

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

        {/*{Object.entries(workoutObject).map((item, index) => {
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

          // TODO setup TYPE to select specific component for output

          return <WorkoutCardRepetitions />;
        })}*/}
      </Section.Body>
    </Section>
  );
};

export default SectionAddSet;
