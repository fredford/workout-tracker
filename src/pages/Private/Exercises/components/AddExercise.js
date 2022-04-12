import React, { useState } from "react";

import Button from "../../../../components/Buttons/Button";

import { FaPlus } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const AddExercise = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var errorName = "";

  const [name, setName] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newType, setNewType] = useState("");

  return (
    <>
      <Button onClick={handleShow}>
        <FaPlus className="me-1" /> <span>Add</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Header>Add Exercise</Card.Header>
          <Card.Body>
            <Form className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Input
                id="add-name"
                type="text"
                value={name}
                onChange={(e) => setName(e)}
              />
            </Form>
            <div className="add-exercise__input">
              <h5 className="mb-1">Area</h5>
              <h6 className="text-muted mb-3">
                The general area of the body being worked
              </h6>
              <div className="add-exercise__area-container">
                {React.Children.toArray(
                  areas.map((area) => {
                    return (
                      <div className="d-flex flex-column align-items-center">
                        <label className="add-exercise__area">
                          <input
                            type="radio"
                            name="Area"
                            value={area}
                            checked={area === newArea}
                            onChange={(e) => setNewArea(e.target.value)}
                          />

                          <img
                            className="add-exercise__image"
                            id={`${area.toLowerCase()}-image`}
                            alt=""
                          />
                          <label>{area}</label>
                        </label>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
};

const areas = ["Upper", "Lower", "Core", "Cardio"];
const types = ["Repetitions", "Duration"];

export default AddExercise;
