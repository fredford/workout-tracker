// Library imports
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaRunning, FaClipboardList } from "react-icons/fa";
import { RiFootprintFill } from "react-icons/ri";

//Local component imports
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import AddExerciseModal from "../../../../components/Misc/AddExerciseModal";
import SectionAddWorkout from "../../Workouts/sections/SectionAddWorkout";

/**
 * Component for making quick actions for adding an exercise, starting a workout,
 * or adding steps.
 *
 * Status: complete
 */
const QuickActions = React.memo(function WrappedQuickActions() {
  // Modal logic for hiding and showing
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
      <Card.Body className="dashboard__quick-actions-buttons">
        <>
          <Button
            border
            className="button-size p-2 w-100"
            onClick={handleShowExercise}
            disabled
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
            className="button-size p-2 w-100"
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
          <Button
            border
            className="button-size p-2 w-100"
            onClick={handleShowSteps}
          >
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
});

export default QuickActions;
