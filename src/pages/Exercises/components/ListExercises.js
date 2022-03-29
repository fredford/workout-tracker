import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";

import Card from "../../../components/cards/Card";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { ActivityContext } from "../../../contexts/activityContext";

import ListExerciseSearchBar from "../../../components/exercises/List/ListExercisesSearchBar";
import ListExercisesUserOptions from "../../../components/exercises/List/ListExercisesUserOptions";
import ActivityToggles from "../../../components/utility/ActivityToggles";
import { useNavigate } from "react-router-dom";

export default function ListExercises() {
  const navigate = useNavigate();

  // Redux State
  const exercises = useSelector((state) => state.exercises.exercises);
  // Context variables
  const activities = useContext(ActivityContext);
  // State variables
  const [userOnly, setUserOnly] = useState(false);
  const [isAscending, setIsAscending] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);

  var displayList = exercises.slice(page * 10, page * 10 + 10);

  // Filter list for User Only
  displayList = displayList.filter((item) => !userOnly || !item.isAdmin);
  // Filter current search items
  displayList = displayList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isAscending) {
    displayList.reverse();
  }

  const changeDirection = () => {
    setIsAscending(!isAscending);
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
    <Card title="All Exercises" className="sections-card list-exercises p-3">
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
            var isAllOff = Object.values(activities).every(
              (x) => x[0] === false
            );

            if (isAllOff || activities[area][0]) {
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
          })
        )}
      </div>

      <div className="list-exercises__button-group">
        <button
          className="button-group__button btn-standard"
          id="left-button"
          onClick={decreasePage}
        >
          <FaArrowLeft />
        </button>

        <button
          className="button-group__button btn-standard"
          id="right-button"
          onClick={increasePage}
        >
          <FaArrowRight />
        </button>
      </div>
    </Card>
  );
}
