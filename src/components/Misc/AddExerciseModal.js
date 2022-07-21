import React, { useState } from "react";

import { addExercise } from "../../redux/reducers/exercises";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Modal } from "react-bootstrap";
import Card from "../Cards/Card";
import Form from "../Forms/Form";
import Button from "../Buttons/Button";
import ButtonRadio from "../Buttons/ButtonRadio";

const AddExerciseModal = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const exercises = useSelector((state) => state.exercises.exercises);

  const [name, setName] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newType, setNewType] = useState("");

  var errorName = "";

  var createDisabled = true;

  // Check that all fields have been filled out
  if (name.length !== 0 && newArea.length !== 0 && newType.length !== 0) {
    createDisabled = false;
  }

  // Check if the name already exists in the system
  if (exercises.some((obj) => obj.name === name)) {
    createDisabled = false;
    errorName = "Exercise name already exists";
  }

  const createExercise = async () => {
    var newExercise = {
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

  const changeArea = (id) => {
    setNewArea(id);
  };

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
            <Form.Input
              id="add-name"
              type="text"
              value={name}
              onChange={(e) => setName(e)}
            />
          </Form>
          <Card.Title>Area</Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            The general area of the body being worked
          </Card.Subtitle>
          <div className="d-flex flex-row mb-3">
            {React.Children.toArray(
              areas.map((area) => {
                let id = `${area}-area`;

                return (
                  <div className="d-flex flex-column align-items-center container">
                    <ButtonRadio
                      id={id}
                      checked={area === newArea}
                      onChange={changeArea}
                    >
                      <img
                        className="standard-image"
                        id={`${area.toLowerCase()}-image`}
                        alt=""
                      />
                    </ButtonRadio>
                    <p>{area}</p>
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
                    <ButtonRadio
                      id={type}
                      checked={type === newType}
                      onChange={changeType}
                    >
                      <img
                        className="standard-image"
                        id={`${type.toLowerCase()}-image`}
                        alt=""
                      />
                    </ButtonRadio>
                    <p>{type}</p>
                  </div>
                );
              })
            )}
          </div>
          <div className="row">
            <div className="col-6">
              <Button
                className="w-100"
                disabled={createDisabled}
                onClick={createExercise}
              >
                <Button.Text>Add</Button.Text>
              </Button>
            </div>
            <div className="col-6">
              <Button className="w-100 btn-danger" onClick={handleClose}>
                <Button.Text>Cancel</Button.Text>
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
