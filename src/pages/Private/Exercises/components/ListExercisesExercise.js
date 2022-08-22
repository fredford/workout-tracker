// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";

/**
 * Component for displaying an Exercise card with an image of the exercise type
 *
 * Status: complete
 */
const ListExercisesExercise = React.memo(({ exercise }) => {
  // React hooks
  const navigate = useNavigate();

  return (
    <Button
      id={exercise.area}
      key={exercise._id}
      onClick={() => navigate(`/exercises/${exercise._id}`)}
      className="align-items-start no-gap"
    >
      <span className="list-exercise__text">
        <span className="list-exercise__name">{exercise.name}</span>
        <span className="w-100 d-flex justify-content-between">
          <span className="list-exercise__area">{exercise.area}</span>
          <span className="list-exercise__type">{exercise.type}</span>
        </span>
      </span>
    </Button>
  );
});

export default ListExercisesExercise;
