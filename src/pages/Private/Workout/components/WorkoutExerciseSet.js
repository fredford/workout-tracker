// Library imports
import React, {useContext} from "react";
import {MdOutlineCancel} from "react-icons/md";

// Local services
import services from "../../../../services/services";

// Contexts
import {WorkoutContext} from "../../../../contexts/workoutContext";

/**
 * Component to display a Set in the current Workout
 * @param set object containing information about exercise, workout, user
 * @param index place in the Workout list that the Set is placed
 * @param setAmount function to set the Amount for the Set
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: complete
 */
const WorkoutExerciseSet = ({set, index, setAmount}) => {
  const contextData = useContext(WorkoutContext);
  const [sets, setSets] = contextData.sets;

  // Function to DELETE the current Set
  const deleteSet = async () => {
    await services.sets.removeSet(
      set._id,
      (data) => {
        let newSets = [...sets];
        newSets = newSets.filter((newSet) => newSet._id !== set._id);
        setSets(newSets);
      },
      (error) => {
        console.log(error)
      }
    )

  };
  return (
    <div
      key={index}
      className="workout-sets-repetitions__set"
      onClick={() => setAmount(set.amount)}
    >
      <h5 className="workout-sets-repetitions__set-count">Set {index + 1}</h5>
      <h5 className="workout-sets-repetitions__set-amount">{set.amount}</h5>

      <MdOutlineCancel
        size={20}
        className="workout-sets-repetitions__set-button"
        onClick={deleteSet}
      />
    </div>
  );
};

export default WorkoutExerciseSet;
