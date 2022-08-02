// Library imports
import React from "react";
import {MdOutlineModeEditOutline, MdDeleteOutline} from "react-icons/md";
import {useNavigate} from "react-router-dom";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";

// Local services
import WorkoutService from "../../../../services/workout";
import api from "../../../../services/sendRequest";

/**
 * Component to display Workout information and general statistics
 *
 * Status: completed
 */
const SectionWorkoutInfo = ({workout, totalAmount, totalSets}) => {
  // React hooks
  const navigate = useNavigate();

  // Function for sending a DELETE request given the current workout
  const deleteWorkout = async () => {
    await api.request(WorkoutService.deleteById(workout._id),
      () => navigate("/workouts"),
      (error) => console.log(error))
  };

  return (
    <Card className="p-0 no-background-border" noBorder>
      <Card.Body className="p-0">
        <Card.ImageHeader
          className="mb-3"
          path={`.././${workout.type.toLowerCase()}.png`}
        >
          <Card.Header>{new Date(workout.date).toDateString()}</Card.Header>
          <Card.Title>{workout.type}</Card.Title>
        </Card.ImageHeader>
        <div className="grid-4-item">
          <StatsCard data={totalAmount} title={"Total"}/>
          <StatsCard data={totalSets} title={"Sets"}/>
          <Button border>
            <Button.Icon>
              <MdOutlineModeEditOutline size={40}/>
            </Button.Icon>
            <Button.Text>Edit</Button.Text>
          </Button>
          <Button border onClick={deleteWorkout}>
            <Button.Icon>
              <MdDeleteOutline size={40}/>
            </Button.Icon>
            <Button.Text>Delete</Button.Text>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionWorkoutInfo;
