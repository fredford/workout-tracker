import React, { useState } from "react";

import Form from "../../../../components/Forms/Form";
import BasicCard from "../../../../components/Cards/BasicCard";
import Button from "../../../../components/Buttons/Button";
import { Modal } from "react-bootstrap";
import services from "../../../../services/services";

const AddWeightModal = ({ weights, setWeights, show, handleClose }) => {
  const [date, setDate] = useState(new Date());
  const [weight, setWeight] = useState(0);
  const addWeight = async () => {
    const newWeights = [...weights];
    const newWeight = { date, amount: weight };
    const [result] = await services.weight.createWeight(newWeight);
    newWeights.push(result);
    setWeights(newWeights);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <BasicCard className="w-100" title="Add Weight">
        <div className="d-flex flex-column large-gap">
          <Form>
            <Form.Label>Set Weight</Form.Label>
            <Form.Input
              type="number"
              placholder="Enter lbs/kg"
              value={weight}
              onChange={(e) => setWeight(Number(e))}
            />
          </Form>
          <Form>
            <Form.Label>Set Date</Form.Label>
            <Form.Input type="date" value={date} onChange={(e) => setDate(e)} />
          </Form>
          <Button fill onClick={addWeight} disabled={weight === 0}>
            Add
          </Button>
        </div>
      </BasicCard>
    </Modal>
  );
};

export default AddWeightModal;
