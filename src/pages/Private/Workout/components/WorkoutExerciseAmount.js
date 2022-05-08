import React from "react";
import Button from "../../../../components/Buttons/Button";
import { FaPlus, FaMinus } from "react-icons/fa";

const WorkoutExerciseAmount = ({
  value,
  index,
  outputIndex,
  outputAmount,
  setOutputAmount,
  setOutputIndex,
  addSet,
}) => {
  const increaseAmount = (index) => {
    let amount = outputAmount;

    if (outputAmount === "" || outputIndex !== index) {
      setOutputAmount(1);
    } else {
      setOutputAmount(++amount);
    }
    setOutputIndex(Number(index));
  };

  const decreaseAmount = (index) => {
    let amount = outputAmount;

    if (outputAmount === "" || outputIndex !== index || outputAmount === 1) {
      setOutputAmount("");
    } else if (outputAmount > 1) {
      setOutputAmount(--amount);
    }

    setOutputIndex(Number(index));
  };

  const updateAmount = (e) => {
    var index = Number(e.target.id);
    setOutputIndex(index);

    var value = Number(e.target.value);

    if (e.target.value > 0) {
      setOutputAmount(Number(e.target.value));
    } else if (e.target.value === "" || value === 0) {
      setOutputAmount("");
    }
  };

  return (
    <div className="d-flex flex-row">
      <div className="d-flex align-items-center p-3">
        <Button onClick={() => increaseAmount(index)}>
          <Button.Icon>
            <FaPlus />
          </Button.Icon>
        </Button>
      </div>

      <form className="d-flex align-items-center">
        <input id={index} value={value} onChange={(e) => updateAmount(e)} />
      </form>
      <div className="d-flex align-items-center p-3">
        <Button onClick={() => decreaseAmount(index)}>
          <Button.Icon>
            <FaMinus />
          </Button.Icon>
        </Button>
      </div>
      <div className="d-flex align-items-center p-3">
        <Button className="p-3" onClick={() => addSet(index)}>
          <Button.Text>Add</Button.Text>
        </Button>
      </div>
    </div>
  );
};

export default WorkoutExerciseAmount;
