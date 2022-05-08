import React from "react";
import SectionWorkoutInfo from "./SectionWorkoutInfo";
import SectionAddSet from "./SectionAddSet";
import Section from "../../../../components/Misc/Section";

const SectionWorkoutTop = ({
  workout,
  availableExercises,
  newExercise,
  changeNewExercise,
}) => {
  return (
    <Section>
      <Section.Body className="d-flex align-items-stretch">
        <SectionWorkoutInfo workout={workout} />
        <SectionAddSet
          exercises={availableExercises}
          newExercise={newExercise}
          setNewExercise={changeNewExercise}
        />
      </Section.Body>
    </Section>
  );
};

export default SectionWorkoutTop;
