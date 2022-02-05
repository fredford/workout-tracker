import React from "react";
import { Button, Card, Modal, Table } from "react-bootstrap";
import SectionsCard from "../cards/SectionsCard";

import {
  FaWindowClose,
  FaChevronUp,
  FaChevronDown,
  FaPlus,
} from "react-icons/fa";

import ExerciseDataService from "../../services/exercise";

export default function ListExercises() {
  var theme = localStorage.getItem("theme");

  const [isAscending, setIsAscending] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const [exercises, setExercises] = React.useState([]);

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    retrieveExercises();
  }, []);

  const retrieveExercises = () => {
    ExerciseDataService.getAll()
      .then((response) => {
        console.log(response.data);
        console.log(response.data.exercises);

        setExercises(response.data.exercises);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const directionChange = () => {
    setIsAscending(!isAscending);
  };

  const ShowDirection = () => {
    if (isAscending) {
      return <FaChevronUp className="list-exercises__direction" />;
    } else {
      return <FaChevronDown className="list-exercises__direction" />;
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const addExercise = (e) => {
    console.log("heello");
    handleClose();
  };

  return (
    <Card className="sections-card list-exercises">
      <SectionsCard name="List" />
      <div className="list-exercises__toggle">
        <div>
          <input
            id="direction-toggle"
            type="checkbox"
            onChange={directionChange}
            checked={isAscending}
          />
          <label id="label-direction-toggle" htmlFor="direction-toggle">
            <ShowDirection />
          </label>
          <button className="list-exercises__add-button" onClick={handleShow}>
            <FaPlus />
          </button>
          <Modal show={show} onHide={handleClose} className={theme}>
            <Modal.Header>
              <Modal.Title>Add Exercise</Modal.Title>
              <Button onClick={handleClose} className="close-button">
                <FaPlus size="20" className="close-button-icon" />
              </Button>
            </Modal.Header>
            <Modal.Body>Add the form here</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={addExercise}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <input
          className="list-exercises__search"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearch}
        />
      </div>
      <hr />
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Muscles</th>
          </tr>
        </thead>
        <tbody className="list-exercise__table">
          {exercises.map((exercise) => {
            return (
              <tr id={exercise.area} key={exercise._id}>
                <td>{exercise.name}</td>
                <td>{exercise.type}</td>
                <td>{exercise.muscles}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
}
