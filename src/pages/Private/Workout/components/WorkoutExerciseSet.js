import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { resolve } from "../../../../services/utils";

import SetsService from "../../../../services/sets";
import { WorkoutContext } from "../../../../contexts/workoutContext";

const WorkoutExerciseSet = ({ set, index, setAmount }) => {
  const contextData = useContext(WorkoutContext);
  const [sets, setSets] = contextData.sets;

  const deleteSet = async () => {
    const [data, error] = await resolve(SetsService.removeSet(set._id));

    if (data) {
      var newSets = [...sets];
      newSets = newSets.filter((newSet) => newSet._id !== set._id);
      setSets(newSets);
    } else {
      console.log(error);
    }
  };
  return (
    <div
      key={index}
      className="workout-sets-repetitions__set"
      onClick={() => setAmount(set.amount)}
    >
      <h5 className="workout-sets-repetitions__set-count">Set {index + 1}</h5>
      <h5 className="workout-sets-repetitions__set-amount">{set.amount}</h5>

      <FaWindowClose
        className="workout-sets-repetitions__set-button"
        onClick={deleteSet}
      />
    </div>
  );
};

export default WorkoutExerciseSet;
