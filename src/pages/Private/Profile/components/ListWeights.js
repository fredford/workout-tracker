import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Card from "../../../../components/Cards/Card";
import services from "../../../../services/services";

const ListWeights = ({ weights, setWeights }) => {
  const deleteWeight = async (weight, index) => {
    await services.weight.removeWeight(weight._id);
    setWeights(weights.splice(index, 1));
  };
  return (
    <Card className="w-100">
      <Card.Header>Weights</Card.Header>
      <Card.Body className="text-normal">
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
      </Card.Body>
    </Card>
  );
};

export default ListWeights;
