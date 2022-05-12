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
    <div className="workout-sets-repetitions__buttons-container">
      <Button
        className="workout-sets-repetitions__button-container"
        onClick={() => increaseAmount(index)}
      >
        <Button.Icon>
          <FaPlus />
        </Button.Icon>
      </Button>

      <form className="workout-sets-repetitions__form">
        <input
          className="workout-sets-repetitions__form-input"
          id={index}
          value={value}
          onChange={(e) => updateAmount(e)}
        />
      </form>

      <Button
        className="workout-sets-repetitions__button-container"
        onClick={() => decreaseAmount(index)}
      >
        <Button.Icon>
          <FaMinus />
        </Button.Icon>
      </Button>
    </div>
  );
};

export default WorkoutExerciseAmount;
