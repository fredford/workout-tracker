// Library imports
import React from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import BasicCard from "../../../../components/Cards/BasicCard";
import CardStats from "../../../../components/Cards/CardStats";

// Local services
import services from "../../../../services/services";

/**
 * Component to display Workout information and general statistics
 *
 * Status: completed
 */
const SectionWorkoutInfo = ({ workout, totalAmount, totalSets }) => {
  // React hooks
  const navigate = useNavigate();

  // TODO add functionality to updating workout information
  const updateWorkout = () => {};

  // Function for sending a DELETE request given the current workout
  const deleteWorkout = async () => {
    await services.workout.deleteById(
      workout._id,
      () => navigate("/workouts"),
      (error) => console.log(error)
    );
  };

  return (
    <BasicCard className="p-0 no-background-border" noBorder>
      <div className="p-0 icon-card__body-container">
        <img
          className="standard-image"
          src={`.././${imgPath[workout.type.toLowerCase()]}`}
          alt={workout.type.toLowerCase()}
        />
        <div className="icon-card__header">
          <h3 className="basic-card__title">{new Date(workout.date).toDateString()}</h3>
          <h3 className="basic-card__subtitle">{workout.type}</h3>
        </div>
      </div>
      <div className="grid-4-item">
        <CardStats data={totalAmount} title={"Total"} />
        <CardStats data={totalSets} title={"Sets"} />
        <Button Icon={MdOutlineModeEditOutline} iconSize={25} onClick={updateWorkout}>
          Edit
        </Button>
        <Button danger Icon={MdDeleteOutline} iconSize={25} onClick={deleteWorkout}>
          Delete
        </Button>
      </div>
    </BasicCard>
  );
};

const imgPath = {
  "single set max": "max.png",
  progression: "progression.png",
  maintenance: "maintenance.png",
};

export default SectionWorkoutInfo;
