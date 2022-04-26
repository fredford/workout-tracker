import React from "react";
import Section from "../../../../components/Misc/Section";

import { resolve } from "../../../../services/utils";
import WorkoutsService from "../../../../services/workouts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonImage from "../../../../components/Buttons/ButtonImage";

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
        <div className="row">
          <div className="col">
            <ButtonImage onClick={() => startNewWorkout("Maintenance")}>
              <ButtonImage.Image src={"./maintenance.png"} />
              <ButtonImage.Text>Maintenance</ButtonImage.Text>
            </ButtonImage>
          </div>
          <div className="col">
            <ButtonImage onClick={() => startNewWorkout("Progression")}>
              <ButtonImage.Image src={"./progression.png"} />
              <ButtonImage.Text>Progression</ButtonImage.Text>
            </ButtonImage>
          </div>
          <div className="col">
            <ButtonImage onClick={() => startNewWorkout("Single Set Max")}>
              <ButtonImage.Image src={"./max.png"} />
              <ButtonImage.Text>Single Set Max</ButtonImage.Text>
            </ButtonImage>
          </div>
        </div>
      </Section.Body>
    </Section>
  );
};

export default SectionAddWorkout;
