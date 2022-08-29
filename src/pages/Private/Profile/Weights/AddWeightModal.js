import React, { useState } from "react";

import Form from "../../../../components/Forms/Form";
import Card from "../../../../components/Cards/Card";
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
      <Card className="w-100">
        <Card.Header>Add Weight</Card.Header>
        <Card.Body className="d-flex flex-column large-gap">
          <Form>
            <Form.Label>Set Weight</Form.Label>
            <Form.Input
              type="number"
              placholder="Enter lbs/kg"
              value={weight}
              onChange={(e) => setWeight(e)}
            />
          </Form>
          <Form>
            <Form.Label>Set Date</Form.Label>
            <Form.Input type="date" value={date} onChange={(e) => setDate(e)} />
          </Form>
          <Button fill onClick={addWeight} disabled={weight === 0}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default AddWeightModal;
