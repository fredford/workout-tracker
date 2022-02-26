import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Table } from "react-bootstrap";
import SectionsCard from "../cards/SectionsCard";

import Card from "../cards/Card";

import {
  FaChevronUp,
  FaChevronDown,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import ExerciseService from "../../services/exercises";
import AddExercise from "./AddExercise";
import { ActivityContext } from "../../contexts/activityContext";
import { resolve } from "../../services/utils";
import { addExercise } from "../../redux/reducers/exercises";

export default function ListExercises() {
  const exercises = useSelector((state) => state.exercises.exercises);

  const dispatch = useDispatch();

  // Context variables
  const activities = useContext(ActivityContext);
  // State variables
  const [isAscending, setIsAscending] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);
  // Theme variable
  var theme = localStorage.getItem("theme");

  var newExercise = {
    name: null,
    area: null,
    muscles: null,
    type: null,
    goalPerSet: null,
    goalPerWorkout: null,
  };

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var displayList = [...exercises];

  if (isAscending) {
    displayList.reverse();
  }

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

  const postExercise = async (e) => {
    const [data, error] = await resolve(ExerciseService.createExercise(e));

    if (data) {
      dispatch(addExercise(e));
    } else {
      console.log(error);
    }

    handleClose();
  };

  const increasePage = () => {
    var newPage = page;

    if (exercises.length === 10) {
      setPage(++newPage);
    }
  };

  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
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
            <AddExercise
              newExercise={newExercise}
              isNull={false}
              handleClose={handleClose}
              addExercise={postExercise}
            />
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
          {React.Children.toArray(
            displayList.map((exercise) => {
              var area = exercise.area.toLowerCase();
              var name = exercise.name.toLowerCase();
              var lowerSearch = search.toLowerCase();

              var isAllOff = Object.values(activities).every(
                (x) => x[0] === false
              );

              if (isAllOff || activities[area][0]) {
                if (
                  search.length === 0 ||
                  (search.length > 0 && name.includes(lowerSearch))
                ) {
                  return (
                    <tr id={exercise.area} key={exercise.id}>
                      <td>{exercise.name}</td>
                      <td>{exercise.type}</td>
                      <td>{exercise.muscles}</td>
                    </tr>
                  );
                }
              }
            })
          )}
        </tbody>
      </Table>
      <div className="list-exercises__button-group">
        <button
          className="button-group__button"
          id="left-button"
          onClick={decreasePage}
        >
          <FaArrowLeft />
        </button>

        <button
          className="button-group__button"
          id="right-button"
          onClick={increasePage}
        >
          <FaArrowRight />
        </button>
      </div>
    </Card>
  );
}
