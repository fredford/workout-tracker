import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Table } from "react-bootstrap";

import Card from "../../../components/cards/Card";

import {
  FaChevronUp,
  FaChevronDown,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import ExerciseService from "../../../services/exercises";
import AddExercise from "../../../components/exercises/AddExercise";
import { ActivityContext } from "../../../contexts/activityContext";
import { resolve } from "../../../services/utils";
import { addExercise } from "../../../redux/reducers/exercises";

import ListExerciseSearchBar from "../../../components/exercises/List/ListExercisesSearchBar";
import ListExercisesUserOptions from "../../../components/exercises/List/ListExercisesUserOptions";
import ActivityToggles from "../../../components/utility/ActivityToggles";
import { useNavigate } from "react-router-dom";

export default function ListExercises() {
  const navigate = useNavigate();
  const exercises = useSelector((state) => state.exercises.exercises);

  const dispatch = useDispatch();

  // Context variables
  const activities = useContext(ActivityContext);
  // State variables
  const [userOnly, setUserOnly] = useState(false);

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

  var displayList = exercises.slice(page * 10, page * 10 + 10);

  if (isAscending) {
    displayList.reverse();
  }

  const changeDirection = () => {
    setIsAscending(!isAscending);
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

    if (exercises.length > 10) {
      setPage(++newPage);
    }
  };

  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  const changeUserOnly = () => {
    setUserOnly(!userOnly);
  };

  const changeSearch = (term) => {
    setSearch(term);
  };

  return (
    <Card title="All Exercises" className="sections-card list-exercises">
      <div className="mb-2">
        <h5 className="d-flex justify-content-center mb-2">Activity Types</h5>
        <ActivityToggles />
      </div>
      <div className="mb-2">
        <h5 className="d-flex justify-content-center mt-2 mb-2">
          User Options
        </h5>
        <ListExercisesUserOptions
          userClicked={userOnly}
          changeUserClicked={changeUserOnly}
        />
      </div>
      <div className="mb-2">
        <ListExerciseSearchBar
          isAscending={isAscending}
          updateDirection={changeDirection}
          search={search}
          updateSearch={changeSearch}
        />
      </div>
      <hr />
      <div className="list-exercises__display row">
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
                  <div
                    className="col-sm-6 mb-1"
                    id={exercise.area}
                    key={exercise._id}
                  >
                    <div
                      className="list-exercise__card"
                      onClick={() => navigate(`/exercises/${exercise._id}`)}
                    >
                      <img
                        className="list-exercise__image"
                        id={`${exercise.area.toLowerCase()}-image`}
                        alt=""
                      />
                      <div className="mt-2">
                        <h6>{exercise.name}</h6>
                        <p className="text-muted">{exercise.muscles}</p>
                        <p className="text-muted">{exercise.type}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })
        )}
      </div>

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
