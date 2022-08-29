import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import services from "../../../../services/services";
import AddWeightModal from "./AddWeightModal";

const ListWeights = ({ weights, setWeights }) => {
  const [showModal, setShowModal] = useState(false);

  const deleteWeight = async (weight, index) => {
    await services.weight.removeWeight(weight._id);
    setWeights(weights.splice(index, 1));
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Card className="w-100">
      <Card.Header>Weights</Card.Header>
      <Card.Body className="text-normal d-flex flex-column justify-content-between">
        <div>
          {weights.map((weight, index) => {
            const date = new Date(weight.date);
            return (
              <div key={weight._id} className="w-100 p-1 d-flex flex-row justify-content-between">
                <p className="">{date.toDateString()}</p>
                <p className="">{weight.amount}</p>
                <MdOutlineCancel
                  size={25}
                  className="workout-sets-repetitions__set-button"
                  onClick={() => deleteWeight(weight, index)}
                />
              </div>
            );
          }) ?? <></>}
        </div>
        <>
          <AddWeightModal
            show={showModal}
            handleClose={handleClose}
            weights={weights}
            setWeights={setWeights}
          />
          <Button onClick={handleShow} fill>
            Add
          </Button>
        </>
      </Card.Body>
    </Card>
  );
};

export default ListWeights;
