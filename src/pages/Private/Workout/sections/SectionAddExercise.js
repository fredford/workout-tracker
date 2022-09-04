// Library imports
import React from "react";
// Local component imports
import BasicCard from "../../../../components/Cards/BasicCard";

/**
 * Component for displaying a list of exercises available to be started in the workout
 * @param exercises list of exercises available for the workout
 * @param setNewExercise function to start the next exercise in the workout
 * @returns {JSX.Element}
 * @constructor
 */
const SectionAddExercise = ({ exercises, setNewExercise }) => {
  return (
    <BasicCard
      className="flex-grow-1"
      title="Exercise"
      subtitle="Choose an exercise to add to the workout"
    >
      <div className="workout-exercises__group">
        {React.Children.toArray(
          exercises.map((exercise) => {
            return (
              <div className="workout-exercises__exercise" onClick={() => setNewExercise(exercise)}>
                <h5>{exercise.name}</h5>
                <h6>{exercise.type}</h6>
              </div>
            );
          })
        )}
      </div>
    </BasicCard>
  );
};

export default SectionAddExercise;
