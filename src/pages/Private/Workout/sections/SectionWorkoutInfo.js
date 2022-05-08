import React, { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import { FcEditImage, FcCancel } from "react-icons/fc";
import { resolve } from "../../../../services/utils";
import WorkoutService from "../../../../services/workout";
import { useNavigate } from "react-router-dom";

const SectionWorkoutInfo = ({ workout, totalAmount, totalSets }) => {
  const navigate = useNavigate();
  const deleteWorkout = async () => {
    const [data, error] = await resolve(WorkoutService.deleteById(workout._id));

    navigate("/workouts");
  };

  return (
    <Card className="p-3">
      <Card.ImageHeader
        className="mb-3"
        path={`.././${workout.type.toLowerCase()}.png`}
      >
        <Card.Header>{new Date(workout.date).toDateString()}</Card.Header>
        <Card.Title>{workout.type}</Card.Title>
      </Card.ImageHeader>

      <Card.Body className="p-0">
        <h3>Reps {totalAmount}</h3>
        <h3>Sets {totalSets}</h3>
        <div className="row align-items-center">
          <div className="col mb-3 mb-lg-0">
            <Button className="w-100">
              <Button.Icon>
                <FcEditImage size={30} />
              </Button.Icon>
              <Button.Text>Edit</Button.Text>
            </Button>
          </div>
          <div className="col">
            <Button className="w-100" onClick={deleteWorkout}>
              <Button.Icon>
                <FcCancel size={30} />
              </Button.Icon>
              <Button.Text>Delete</Button.Text>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SectionWorkoutInfo;
