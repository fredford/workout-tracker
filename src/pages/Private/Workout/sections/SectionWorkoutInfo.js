import React from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import { FcEditImage, FcCancel } from "react-icons/fc";
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
    <Card className="p-3">
      <Card.Body className="p-0">
        <Card.ImageHeader
          className="mb-3"
          path={`.././${workout.type.toLowerCase()}.png`}
        >
          <Card.Header>{new Date(workout.date).toDateString()}</Card.Header>
          <Card.Title>{workout.type}</Card.Title>
        </Card.ImageHeader>
        <div className="mb-3 grid-4-item">
          <StatsCard data={totalAmount} title={"Total"} />
          <StatsCard data={totalSets} title={"Sets"} />
          <Button className="">
            <Button.Icon>
              <FcEditImage size={30} />
            </Button.Icon>
            <Button.Text>Edit</Button.Text>
          </Button>
          <Button className="w-100" onClick={deleteWorkout}>
            <Button.Icon>
              <FcCancel size={30} />
            </Button.Icon>
            <Button.Text>Delete</Button.Text>
          </Button>
        </div>

        <div className="row align-items-center">
          <div className="col mb-3 mb-lg-0"></div>
          <div className="col"></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionWorkoutInfo;
