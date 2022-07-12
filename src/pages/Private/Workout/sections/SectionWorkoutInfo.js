import React from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { resolve } from "../../../../services/utils";
import WorkoutService from "../../../../services/workout";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../../../components/Stats/StatsCard";

const SectionWorkoutInfo = ({ workout, totalAmount, totalSets }) => {
  const navigate = useNavigate();
  const deleteWorkout = async () => {
    const [data, error] = await resolve(WorkoutService.deleteById(workout._id));

    navigate("/workouts");
  };

  return (
    <Card className="p-0" noBorder>
      <Card.Body className="p-0">
        <Card.ImageHeader
          className="mb-3"
          path={`.././${workout.type.toLowerCase()}.png`}
        >
          <Card.Header>{new Date(workout.date).toDateString()}</Card.Header>
          <Card.Title>{workout.type}</Card.Title>
        </Card.ImageHeader>
        <div className="grid-4-item">
          <StatsCard data={totalAmount} title={"Total"} />
          <StatsCard data={totalSets} title={"Sets"} />
          <Button border>
            <Button.Icon>
              <MdOutlineModeEditOutline size={40} />
            </Button.Icon>
            <Button.Text>Edit</Button.Text>
          </Button>
          <Button border onClick={deleteWorkout}>
            <Button.Icon>
              <MdDeleteOutline size={40} />
            </Button.Icon>
            <Button.Text>Delete</Button.Text>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionWorkoutInfo;
