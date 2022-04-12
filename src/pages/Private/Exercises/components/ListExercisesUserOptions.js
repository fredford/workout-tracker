import React from "react";

const ListExercisesUserOptions = (props) => {
  var buttonClass = "btn ";

  buttonClass += props.userClicked ? "btn-secondary" : "btn-outline-secondary";

  const buttonChange = () => {
    props.changeUserClicked();
  };

  return (
    <div className="mb-3">
      <h4 className="text-center mb-2">User Options</h4>
      <div className="d-flex justify-content-center">
        <button className={buttonClass} onClick={buttonChange}>
          User Only
        </button>
      </div>
    </div>
  );
};

export default ListExercisesUserOptions;
