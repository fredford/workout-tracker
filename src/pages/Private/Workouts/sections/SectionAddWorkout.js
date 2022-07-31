// Library imports
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Local component imports
import Section from "../../../../components/Misc/Section";
import Button from "../../../../components/Buttons/Button";

// Local services imports
import WorkoutsService from "../../../../services/workouts";
import api from "../../../../services/sendRequest";

/**
 * Component for displaying the types of workouts a User can start and starting that workout
 *
 * Status: complete
 */
const SectionAddWorkout = () => {
  // React hooks
  const navigate = useNavigate();

  // Redux store User
  const user = useSelector((state) => state.user);

  // Function to start the Workout selected
  const startNewWorkout = async (type) => {
    api.create(
      WorkoutsService.createWorkout({
        type: type,
        user: user._id,
      }),
      (data) => {
        navigate(`/workouts/${data._id}`);
      }
    );
  };

  // Object of buttons to be displayed
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
                light
              >
                <Button.Image>
                  <img className="button-image" src={src} alt="" />
                </Button.Image>
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
