import React from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";

import { FaRunning, FaClipboardList } from "react-icons/fa";
import { RiFootprintFill } from "react-icons/ri";

const QuickActions = () => {
  return (
    <Card className="dashboard__quick-actions">
      <Card.Header>Quick Actions</Card.Header>
      <Card.Body className="mt-3 d-flex flex-row justify-content-between">
        <Button border className="button-size p-2">
          <Button.Icon>
            <FaRunning size={25} />
          </Button.Icon>
          <Button.Text>Add Exercise</Button.Text>
        </Button>
        <Button border className="button-size p-2">
          <Button.Icon>
            <FaClipboardList size={25} />
          </Button.Icon>
          <Button.Text>Add Workout</Button.Text>
        </Button>
        <Button border className="button-size p-2">
          <Button.Icon>
            <RiFootprintFill size={25} />
          </Button.Icon>
          <Button.Text>Add Steps</Button.Text>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default QuickActions;
