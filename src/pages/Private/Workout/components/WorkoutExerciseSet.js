import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { resolve } from "../../../../services/utils";

import SetsService from "../../../../services/sets";
import { SetsContext } from "../../../../contexts/setsContext";

const WorkoutExerciseSet = ({ set, index }) => {
  const [setsList, setSetsList] = useContext(SetsContext);

  const deleteSet = async () => {
    const [data, error] = await resolve(SetsService.removeSet(set._id));

    if (data) {
      var newSets = [...setsList];
      newSets = newSets.filter((newSet) => newSet._id !== set._id);
      setSetsList(newSets);
    } else {
      console.log(error);
    }
  };
  return (
    <div key={index} className="workout-sets-repetitions__set">
      <h5 className="me-3">Set {index + 1}</h5>
      <h5>{set.amount}</h5>
      <button className="btn set-button" onClick={deleteSet}>
        <FaWindowClose />
      </button>
    </div>
  );
};

export default WorkoutExerciseSet;
