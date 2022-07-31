// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Component for displaying an Exercise card with an image of the exercise type
 *
 * Status: complete
 */
const ListExercisesExercise = React.memo(({ exercise }) => {
  // React hooks
  const navigate = useNavigate();

  return (
    <div
      className="list-exercise__card"
      id={exercise.area}
      key={exercise._id}
      onClick={() => navigate(`/exercises/${exercise._id}`)}
    >
      <img
        className="list-exercise__image"
        id={`${exercise.area.toLowerCase()}-image`}
        alt=""
      />
      <div className="list-exercise__text">
        <h6>{exercise.name}</h6>
        <p>{exercise.type}</p>
      </div>
    </div>
  );
});

export default ListExercisesExercise;
