import React from "react";
import { BsGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/cards/Card";

const ExerciseTitle = React.memo(function ExerciseTitle({ exercise }) {
  const navigate = useNavigate();
  return (
    <Card className="frosted-glass">
      <h1 className="exercise-page__title">{exercise.name}</h1>
      <div className="exercise-page__sub">
        <div className="exercise-page__spacer">
          <h4 className="exercise-page__subtitle">{exercise.type}</h4>
        </div>
        <div className="exercise-page__spacer">
          <h4 className="exercise-page__subtitle">|</h4>
        </div>
        <div className="exercise-page__spacer">
          <h4 className="exercise-page__subtitle">{exercise.area}</h4>
        </div>
      </div>
      <button
        className=" btn btn-outline-secondary exercise-page__change-button"
        onClick={() => navigate(`/exercises/${exercise._id}/editexercise`)}
      >
        <BsGearFill />
      </button>
    </Card>
  );
});

export default ExerciseTitle;
