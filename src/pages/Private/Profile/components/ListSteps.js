import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Card from "../../../../components/Cards/Card";
import services from "../../../../services/services";

const ListSteps = ({ stepsList, setStepsList }) => {
  const deleteSteps = async (steps, index) => {
    await services.steps.removeSteps(steps._id);
    setStepsList(stepsList.splice(index, 1));
  };
  return (
    <Card className="w-100">
      <Card.Header>Steps</Card.Header>
      <Card.Body className="text-normal">
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
      </Card.Body>
    </Card>
  );
};

export default ListSteps;
