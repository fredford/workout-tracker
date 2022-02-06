import React from "react";

import { Button, Col, Row, Modal } from "react-bootstrap";

import { FaPlus } from "react-icons/fa";

export default function AddExercise({
  newExercise,
  isNull,
  handleClose,
  addExercise,
}) {
  const [exercise, setExercise] = React.useState(newExercise);
  const [isFilled, setIsFilled] = React.useState(isNull);

  const updateExercise = (e) => {
    var id = e.target.id.substring(5);

    exercise[id] = e.target.value;

    setExercise(exercise);
    setIsFilled(Object.values(exercise).every((x) => x !== null && x !== ""));
  };

  const closeModal = () => {
    setExercise({
      name: null,
      area: null,
      muscles: null,
      type: null,
      goalperset: null,
      goalperworkout: null,
    });
    setIsFilled(false);
    handleClose();
  };

  const addNewExercise = () => {
    console.log("Add", exercise);
    addExercise(exercise);
  };

  return (
    <div>
      <Modal.Header>
        <Modal.Title>Add Exercise</Modal.Title>
        <Button onClick={closeModal} className="close-button">
          <FaPlus size="20" className="close-button-icon" />
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Row className="mb-2">
          <label
            htmlFor="inputname"
            className="col-sm-4 list-modal__form-label"
          >
            Name
          </label>

          <Col>
            <input
              type="text"
              className="add-exercise__form"
              id="inputname"
              placeholder="Name"
              onChange={updateExercise}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <label
            htmlFor="inputarea"
            className="col-sm-4 list-modal__form-label"
          >
            Area
          </label>

          <Col>
            <select
              type="text"
              className="custom-select add-exercise__form"
              id="inputarea"
              onChange={updateExercise}
            >
              <option value={null}></option>
              <option value="Upper">Upper</option>
              <option value="Lower">Lower</option>
              <option value="Core">Core</option>
              <option value="Cardio">Cardio</option>
            </select>
          </Col>
        </Row>
        <Row className="mb-2">
          <label
            htmlFor="inputmuscles"
            className="col-sm-4 list-modal__form-label"
          >
            Muscles
          </label>

          <Col>
            <input
              type="text"
              className="add-exercise__form"
              id="inputmuscles"
              placeholder="Muscles"
              onChange={updateExercise}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <label
            htmlFor="inputtype"
            className="col-sm-4 list-modal__form-label"
          >
            Type
          </label>

          <Col>
            <select
              type="text"
              className="custom-select add-exercise__form"
              id="inputtype"
              onChange={updateExercise}
            >
              <option value={null}></option>
              <option value="Repetitions">Repetitions</option>
              <option value="Duration">Duration</option>
            </select>
          </Col>
        </Row>
        <Row className="mb-2">
          <label
            htmlFor="inputgoalPerSet"
            className="col-sm-4 list-modal__form-label"
          >
            Goal Per Set
          </label>

          <Col>
            <input
              type="text"
              className="add-exercise__form"
              id="inputgoalPerSet"
              placeholder="SetGoal"
              onChange={updateExercise}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <label
            htmlFor="inputgoalPerWorkout"
            className="col-sm-4 list-modal__form-label"
          >
            Goal Per Workout
          </label>

          <Col>
            <input
              type="text"
              className="add-exercise__form"
              id="inputgoalPerWorkout"
              placeholder="WorkoutGoal"
              onChange={updateExercise}
            />
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={!isFilled}
          className="add-exercise__add-button"
          onClick={addNewExercise}
        >
          Add
        </Button>
      </Modal.Footer>
    </div>
  );
}
