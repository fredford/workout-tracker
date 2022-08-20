// Library imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

// Local components imports
import Card from "../Cards/Card";
import Form from "../Forms/Form";
import Button from "../Buttons/Button";

// Reducers
import { addExercise } from "../../redux/reducers/exercises";

const AddExerciseModal = ({ show, handleClose }) => {
  // React hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get Redux store data for User and Exercises
  const user = useSelector((state) => state.user);
  const exercises = useSelector((state) => state.exercises.exercises);

  // Set component state
  const [name, setName] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newType, setNewType] = useState("");

  // Conditional render, if the modal is not required return null
  if (!show) return null;

  // Check that all fields have been filled out
  let createDisabled = !(name.length !== 0 && newArea.length !== 0 && newType.length !== 0);

  // Check if the name already exists in the system
  if (exercises.some((obj) => obj.name === name)) {
    createDisabled = false;
  }

  // Function to create an Exercise when called
  const createExercise = async () => {
    let newExercise = {
      name,
      area: newArea,
      type: newType,
      user: user._id,
    };
    try {
      await dispatch(addExercise(newExercise));
      navigate("/message/exerciseadded");
    } catch (err) {
      navigate("/message/exercisefailed");
      console.log(err);
    }
  };

  // Update the current state Area
  const changeArea = (id) => {
    setNewArea(id);
  };
  // Update the current state Type
  const changeType = (id) => {
    setNewType(id);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Card>
        <Card.Header bar>Add Exercise</Card.Header>
        <Card.Body>
          <Card.Title>Name</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            The name that will be used to represent the exercise
          </Card.Subtitle>
          <Form className="mb-3">
            <Form.Input id="add-name" type="text" value={name} onChange={(e) => setName(e)} />
          </Form>
          <Card.Title>Area</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            The general area of the body being worked
          </Card.Subtitle>
          <div className="grid-4-item mb-3">
            {React.Children.toArray(
              areas.map((area) => {
                let id = `${area}`;
                return (
                  <div className="d-flex flex-column justify-content-center align-items-center container">
                    <Button
                      toggle
                      srcId={`${area.toLowerCase()}-image`}
                      active={area === newArea}
                      onClick={() => changeArea(id)}
                    >
                      {area}
                    </Button>
                  </div>
                );
              })
            )}
          </div>
          <Card.Title>Type</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            The way the exercise is quantified
          </Card.Subtitle>
          <div className="d-flex flex-row mb-3">
            {React.Children.toArray(
              types.map((type) => {
                return (
                  <div className="d-flex flex-column align-items-center container">
                    <Button
                      active={type === newType}
                      toggle
                      onClick={() => changeType(type)}
                      srcId={`${type.toLowerCase()}-image`}
                    >
                      {type}
                    </Button>
                  </div>
                );
              })
            )}
          </div>
          <div className="row">
            <div className="col-6">
              <Button fill disabled={createDisabled} onClick={createExercise}>
                Add
              </Button>
            </div>
            <div className="col-6">
              <Button danger fill onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Modal>
  );
};

const areas = ["Upper", "Lower", "Core", "Cardio"];
const types = ["Repetitions", "Duration"];

export default AddExerciseModal;
