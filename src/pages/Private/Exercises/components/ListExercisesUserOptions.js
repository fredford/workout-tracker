import React from "react";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";

const ListExercisesUserOptions = (props) => {
  var buttonClass = "button-icon-height";

  buttonClass += props.userClicked ? " button-toggle-active" : "";

  const buttonChange = () => {
    props.changeUserClicked();
  };

  return (
    <div className="mb-3">
      <h4 className="text-center mb-2">User Options</h4>
      <ButtonToggle className={buttonClass} onClick={buttonChange}>
        User Only
      </ButtonToggle>
    </div>
  );
};

export default ListExercisesUserOptions;
