// Library imports
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { FaRunning, FaClipboardList } from "react-icons/fa";
import { RiFootprintFill } from "react-icons/ri";

//Local component imports
import Button from "../../../../components/Buttons/buttons";
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
      <Card.Body className="dashboard__quick-actions-buttons large-gap">
        <>
          <Button fill Icon={FaRunning} iconSize={25} onClick={handleShowExercise}>
            Add Exercise
          </Button>
          <AddExerciseModal show={showExercise} handleClose={handleCloseExercise} />
        </>
        <>
          <Button fill Icon={FaClipboardList} iconSize={25} onClick={handleShowWorkout}>
            Add Workout
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
          <Button fill Icon={RiFootprintFill} iconSize={25} onClick={handleShowSteps}>
            Add Steps
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
