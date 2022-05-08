import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { resolve } from "../../../../services/utils";

import SetsService from "../../../../services/sets";

const WorkoutExerciseSet = ({ set, index, updateSets }) => {
  const deleteSet = async () => {
    const [data, error] = await resolve(SetsService.removeSet(set._id));
    updateSets(set);
  };
  return (
    <div key={index} className="d-flex flex-row set align-items-center">
      <h5 className="me-3">Set {index + 1}</h5>
      <h5>{set.amount}</h5>
      <button className="btn set-button" onClick={deleteSet}>
        <FaWindowClose />
      </button>
    </div>
  );
};

export default WorkoutExerciseSet;
