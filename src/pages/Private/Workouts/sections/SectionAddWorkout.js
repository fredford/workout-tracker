import React from "react";
import Section from "../../../../components/Misc/Section";

import { resolve } from "../../../../services/utils";
import WorkoutsService from "../../../../services/workouts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";

const SectionAddWorkout = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const startNewWorkout = async (type) => {
    const [data, error] = await resolve(
      WorkoutsService.createWorkout({
        type: type,
        user: user._id,
      })
    );
    if (data) {
      navigate(`/workouts/${data._id}`);
    }
  };
  return (
    <Section>
      <Section.Header>Start New Workout</Section.Header>
      <Section.Body>
        <div className="add-workout__container">
          <Button
            className="add-workout__item"
            onClick={() => startNewWorkout("Maintenance")}
          >
            <Button.Image src={"./maintenance.png"} />
            <Button.Text>Maintenance</Button.Text>
          </Button>

          <Button
            className="add-workout__item"
            onClick={() => startNewWorkout("Progression")}
          >
            <Button.Image src={"./progression.png"} />
            <Button.Text>Progression</Button.Text>
          </Button>

          <Button
            className="add-workout__item"
            onClick={() => startNewWorkout("Single Set Max")}
          >
            <Button.Image src={"./max.png"} />
            <Button.Text>Single Set Max</Button.Text>
          </Button>
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddWorkout;
