import React from "react";

const ListExercisesUserOptions = (props) => {
  var buttonClass = "btn btn-outline-soft";

  if (props.userClicked) {
    buttonClass += " user-clicked";
  }

  const buttonChange = () => {
    props.changeUserClicked();
  };

  return (
    <div className="user-options__button-group">
      <button className={buttonClass} onClick={buttonChange}>
        User Only
      </button>
    </div>
  );
};

export default ListExercisesUserOptions;
