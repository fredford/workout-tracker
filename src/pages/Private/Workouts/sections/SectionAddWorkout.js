// Library imports
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Local component imports
import Section from "../../../../components/Misc/Section";
import Button from "../../../../components/Buttons/buttons";

// Local services imports
import services from "../../../../services/services";

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
    await services.workouts.createWorkout(
      {
        type: type,
        user: user._id,
      },
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
        <div className="grid-3-item">
          {Object.entries(buttons).map(([name, src]) => {
            return (
              <Button key={name} onClick={() => startNewWorkout(name)} src={src} alt={name}>
                {name}
              </Button>
            );
          })}
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddWorkout;
