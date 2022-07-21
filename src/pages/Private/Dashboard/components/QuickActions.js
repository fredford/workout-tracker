import React, { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";

import { FaRunning, FaClipboardList } from "react-icons/fa";
import { RiFootprintFill } from "react-icons/ri";
import AddExerciseModal from "../../../../components/Misc/AddExerciseModal";
import { Modal } from "react-bootstrap";
import SectionAddWorkout from "../../Workouts/sections/SectionAddWorkout";

const QuickActions = () => {
  const [showExercise, setShowExercise] = useState(false);
  const handleShowExercise = () => setShowExercise(true);
  const handleCloseExercise = () => setShowExercise(false);

  const [showWorkout, setShowWorkout] = useState(false);
  const handleShowWorkout = () => setShowWorkout(true);
  const handleCloseWorkout = () => setShowWorkout(false);

  const [showSteps, setShowSteps] = useState(false);
  const handleShowSteps = () => setShowSteps(true);
  const handleCloseSteps = () => setShowSteps(false);

  return (
    <Card className="dashboard__quick-actions">
      <Card.Header>Quick Actions</Card.Header>
      <Card.Body className="mt-3 d-flex flex-row justify-content-between">
        <>
          <Button
            border
            className="button-size p-2"
            onClick={handleShowExercise}
          >
            <Button.Icon>
              <FaRunning size={25} />
            </Button.Icon>
            <Button.Text>Add Exercise</Button.Text>
          </Button>
          <AddExerciseModal
            show={showExercise}
            handleClose={handleCloseExercise}
          />
        </>
        <>
          <Button
            border
            className="button-size p-2"
            onClick={handleShowWorkout}
          >
            <Button.Icon>
              <FaClipboardList size={25} />
            </Button.Icon>
            <Button.Text>Add Workout</Button.Text>
          </Button>
          <Modal show={showWorkout} onHide={handleCloseWorkout}>
            <Card>
              <Card.Body>
                <SectionAddWorkout />
              </Card.Body>
            </Card>
          </Modal>
        </>
        <>
          <Button border className="button-size p-2" onClick={handleShowSteps}>
            <Button.Icon>
              <RiFootprintFill size={25} />
            </Button.Icon>
            <Button.Text>Add Steps</Button.Text>
          </Button>
          <Modal show={showSteps} onHide={handleCloseSteps}>
            <div className="p-3">Feature in progress</div>
          </Modal>
        </>
      </Card.Body>
    </Card>
  );
};

export default QuickActions;
