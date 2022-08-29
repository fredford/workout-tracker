import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import services from "../../../../services/services";
import AddStepsModal from "./AddStepsModal";

const ListSteps = ({ stepsList, setStepsList }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteSteps = async (steps, index) => {
    await services.steps.removeSteps(steps._id);
    setStepsList(stepsList.splice(index, 1));
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Card className="w-100">
      <Card.Body className="text-normal d-flex flex-column justify-content-between">
        <div>
          {stepsList.map((steps, index) => {
            const date = new Date(steps.date);
            return (
              <div key={steps._id} className="w-100 p-1 d-flex flex-row justify-content-between">
                <p className="">{date.toDateString()}</p>
                <p className="">{steps.amount}</p>
                <MdOutlineCancel
                  size={25}
                  className="workout-sets-repetitions__set-button"
                  onClick={() => deleteSteps(steps, index)}
                />
              </div>
            );
          }) ?? <></>}
        </div>
        <>
          <AddStepsModal
            show={showModal}
            handleClose={handleClose}
            stepsList={stepsList}
            setStepsList={setStepsList}
          />
          <Button fill onClick={handleShow}>
            Add
          </Button>
        </>
      </Card.Body>
    </Card>
  );
};

export default ListSteps;
