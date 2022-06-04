import React from "react";

import { useNavigate } from "react-router-dom";

const ListExercisesExercise = React.memo(({ exercise }) => {
  const navigate = useNavigate();

  return (
    <div
      className="list-exercise__card"
      id={exercise.area}
      key={exercise._id}
      onClick={() => navigate(`/exercises/${exercise._id}`)}
    >
      <img
        className="list-exercise__image standard-image"
        id={`${exercise.area.toLowerCase()}-image`}
        alt=""
      />
      <div className="mt-2">
        <h6>{exercise.name}</h6>
        <p className="text-muted">{exercise.type}</p>
      </div>
    </div>
  );
});

export default ListExercisesExercise;
