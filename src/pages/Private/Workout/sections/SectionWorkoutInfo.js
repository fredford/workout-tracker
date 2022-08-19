// Library imports
import React from "react";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Local component imports
import Button from "../../../../components/Buttons/buttons";
import Card from "../../../../components/Cards/Card";
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
    <Card className="p-0 no-background-border" noBorder>
      <Card.Body className="p-0">
        <Card.ImageHeader className="mb-3" path={`.././${workout.type.toLowerCase()}.png`}>
          <Card.Header>{new Date(workout.date).toDateString()}</Card.Header>
          <Card.Title>{workout.type}</Card.Title>
        </Card.ImageHeader>
        <div className="grid-4-item">
          <CardStats data={totalAmount} title={"Total"} />
          <CardStats data={totalSets} title={"Sets"} />
          <Button Icon={MdOutlineModeEditOutline} iconSize={40} onClick={updateWorkout}>
            Edit
          </Button>
          <Button danger Icon={MdDeleteOutline} iconSize={40} onClick={deleteWorkout}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionWorkoutInfo;
