// Library imports
import React from "react";
// Local component imports
import Section from "../../../../components/Misc/Section";
import WorkoutCardRepetitions from "../components/WorkoutCardRepetitions";

/**
 * Component for displaying all sets that a User has completed separated by Exercise name
 * @param workoutObject object containing sets separated by Exercise name
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: in-progress
 *
 * Future:
 * - TODO add functionality to Duration exercises
 * - TODO add functionality to Weight based exercises
 * - TODO add functionality to Equipment based exercises
 */
const SectionAddSet = ({workoutObject}) => {
  return (
    <Section>
      <Section.Header>Sets</Section.Header>
      <Section.Body>
        <div className="workout-sets__container">
          {Object.entries(workoutObject).map(
            ([workoutExercise, exerciseObject]) => {

              // TODO add future features for Duration, Weight, Equipment
              if (exerciseObject.exercise.type === "Repetitions") {
                return (
                  <div key={workoutExercise}>
                    <WorkoutCardRepetitions exerciseObject={exerciseObject}/>
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
