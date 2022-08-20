// Library imports
import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
// Local component imports
import Button from "../../../../components/Buttons/Button";
import AddExerciseModal from "../../../../components/Misc/AddExerciseModal";

/**
 * Wrapper for handling the Add Exercise Modal, when the button is pressed the Modal will display
 *
 * Status: complete
 */
const AddExercise = () => {
  // Component state for visibility status
  const [show, setShow] = useState(false);

  // Functions to handle showing or close the modal
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button iconOnly Icon={BsPlusLg} onClick={handleShow} />
      <AddExerciseModal show={show} handleClose={handleClose} />
    </>
  );
};

export default AddExercise;
