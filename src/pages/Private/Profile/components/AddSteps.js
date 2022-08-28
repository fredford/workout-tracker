import React from "react";

import Form from "../../../../components/Forms/Form";
import Card from "../../../../components/Cards/Card";
import Button from "../../../../components/Buttons/Button";

export function AddSteps({ steps, setSteps, date, setDate, addSteps }) {
  return (
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
  );
}
