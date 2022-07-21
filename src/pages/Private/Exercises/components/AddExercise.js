import React, { useState } from "react";

import Button from "../../../../components/Buttons/Button";

import AddExerciseModal from "../../../../components/Misc/AddExerciseModal";

import { BsPlusLg } from "react-icons/bs";

const AddExercise = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button onClick={handleShow} border className="h-100 p-0 ps-3 pe-3 ">
        <Button.Icon>
          <BsPlusLg className="me-1" /> <span>Add</span>
        </Button.Icon>
      </Button>
      <AddExerciseModal show={show} handleClose={handleClose} />
    </>
  );
};

export default AddExercise;
