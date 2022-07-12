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

  const buttons = {
    Maintenance: "./maintenance.png",
    Progression: "./progression.png",
    "Single Set Max": "./max.png",
  };

  return (
    <Section>
      <Section.Header>Start New Workout</Section.Header>
      <Section.Body>
        <div className="add-workout__container">
          {Object.entries(buttons).map(([name, src]) => {
            return (
              <Button
                className="add-workout__item"
                onClick={() => startNewWorkout(name)}
                key={name}
                border
              >
                <Button.Image src={src} />
                <Button.Text>{name}</Button.Text>
              </Button>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddWorkout;
