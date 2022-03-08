import React from "react";
import { useNavigate } from "react-router-dom";

const ExerciseTitle = React.memo(function ExerciseTitle({ exercise }) {
  const navigate = useNavigate();
  return (
    <div className="exercise-page__hero">
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
      <div className="d-flex justify-content-center mt-3">
        {exercise.isAdmin ? (
          <></>
        ) : (
          <button
            className="btn btn-standard"
            onClick={() => navigate(`/exercises/${exercise._id}/editexercise`)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
});

export default ExerciseTitle;
