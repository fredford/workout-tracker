// Library import
import React from "react";
// Local component import
import Button from "../../../../components/Buttons/buttons";

/**
 * Component to select the user options available
 *
 * Status: complete
 */
const ListExercisesUserOptions = ({ changeUserClicked, userClicked }) => {
  const buttonChange = () => {
    changeUserClicked();
  };

  return (
    <div className="user-options__button-group">
      <h4 className="user-options__header">User Options</h4>
      <Button onClick={buttonChange} active={userClicked}>
        User Only
      </Button>
    </div>
  );
};

export default ListExercisesUserOptions;
