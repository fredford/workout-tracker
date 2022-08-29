import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import Form from "../../../../components/Forms/Form";
import Card from "../../../../components/Cards/Card";
import Button from "../../../../components/Buttons/Button";
import services from "../../../../services/services";

const AddStepsModal = ({ stepsList, setStepsList, show, handleClose }) => {
  const [date, setDate] = useState(new Date());
  const [steps, setSteps] = useState(0);

  const addSteps = async () => {
    let newList = [...stepsList];
    const newSteps = { date, amount: steps };
    const [result] = await services.steps.createSteps(newSteps);

    newList.push(result);
    setStepsList(newList);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Card className="w-100">
        <Card.Header>Add Steps</Card.Header>
        <Card.Body className="d-flex flex-column large-gap">
          <Form>
            <Form.Label>Set Steps</Form.Label>
            <Form.Input
              type="number"
              placholder="Enter lbs/kg"
              value={steps}
              onChange={(e) => setSteps(e)}
            />
          </Form>
          <Form>
            <Form.Label>Set Date</Form.Label>
            <Form.Input type="date" value={date} onChange={(e) => setDate(e)} />
          </Form>
          <Button fill onClick={addSteps} disabled={steps === 0}>
            Add
          </Button>
        </Card.Body>
      </Card>
    </Modal>
  );
};

export default AddStepsModal;
