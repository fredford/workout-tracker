import React from "react";
import Button from "../../../../components/Buttons/Button";
import { FaPlus, FaMinus } from "react-icons/fa";

const WorkoutExerciseAmount = ({ amount, setAmount }) => {
  var numberAmount = convertToNumber(amount);

  const increaseAmount = () => {
    if (!numberAmount) {
      setAmount(1);
    } else {
      setAmount(++numberAmount);
    }
  };

  const decreaseAmount = () => {
    var numberAmount = convertToNumber(amount);

    if (numberAmount) {
      setAmount(--numberAmount);
    }
  };

  const updateAmount = (e) => {
    var numberAmount = convertToNumber(e.target.value);

    if (numberAmount >= 0) {
      setAmount(numberAmount);
    }
  };

  return (
    <div className="workout-sets-repetitions__buttons-container">
      <Button
        className="workout-sets-repetitions__button-container"
        onClick={() => increaseAmount()}
      >
        <Button.Icon>
          <FaPlus />
        </Button.Icon>
      </Button>

      <form className="workout-sets-repetitions__form">
        <input
          className="workout-sets-repetitions__form-input"
          value={amount}
          onChange={(e) => updateAmount(e)}
        />
      </form>

      <Button
        className="workout-sets-repetitions__button-container"
        onClick={() => decreaseAmount()}
      >
        <Button.Icon>
          <FaMinus />
        </Button.Icon>
      </Button>
    </div>
  );
};

function convertToNumber(value) {
  return Number(value) !== NaN ? Number(value) : 0;
}

export default WorkoutExerciseAmount;
