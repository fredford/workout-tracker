// Library imports
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Local component imports
import Button from "../../../../components/Buttons/Button";

// Utilities
import { convertToNumber } from "../../../../utilities/utils";

/**
 * Component to handle updating the current amount for the Set
 * @param amount current amount for the exercise state used in previous Sets
 * @param setAmount function to update the amount in state
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: complete
 */
const WorkoutExerciseAmount = ({ amount, setAmount }) => {
  // Convert the amount to a Number
  let numberAmount = convertToNumber(amount);

  // Function to increment the current Amount
  const increaseAmount = () => {
    if (!numberAmount) {
      setAmount(1);
    } else {
      setAmount(++numberAmount);
    }
  };

  // Function to decrement the current Amount
  const decreaseAmount = () => {
    let numberAmount = convertToNumber(amount);

    if (numberAmount) {
      setAmount(--numberAmount);
    }
  };

  // Function to update the current amount in the parent State
  const updateAmount = (e) => {
    let numberAmount = convertToNumber(e.target.value);

    if (numberAmount >= 0) {
      setAmount(numberAmount);
    }
  };

  return (
    <div className="workout-sets-repetitions__buttons-container">
      <Button
        className="workout-sets-repetitions__button-container"
        Icon={FaPlus}
        onClick={() => increaseAmount()}
      />

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
        Icon={FaMinus}
      />
    </div>
  );
};

export default WorkoutExerciseAmount;
