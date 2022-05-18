import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  ActivityProvider,
  ActivityContext,
} from "../../../../contexts/activityContext";

import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import ActivityToggles from "../../../../components/Misc/ActivityToggles";
import ListExercisesUserOptions from "../components/ListExercisesUserOptions";
import ListExerciseSearchBar from "../components/ListExercisesSearchBar";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SectionExercises = () => {
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
    <Section>
      <Section.Header>Exercises</Section.Header>
      <Section.Body>
        <Card>
          <Card.Body>
            <ActivityToggles />
            <ListExercisesUserOptions
              userClicked={userOnly}
              changeUserClicked={changeUserOnly}
            />
            <ListExerciseSearchBar
              isAscending={isAscending}
              updateDirection={changeDirection}
              search={search}
              updateSearch={changeSearch}
            />
            <Card.Bar />
            <div className="row">
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
                            className="list-exercise__image standard-image"
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
            <div className="d-flex flex-row justify-content-center">
              <div className="button-icon me-2">
                <ButtonToggle
                  onChange={decreasePage}
                  className="line-height w-100 h-100"
                >
                  <FaArrowLeft />
                </ButtonToggle>
              </div>
              <div className="button-icon ms-2">
                <ButtonToggle
                  onChange={increasePage}
                  className="button-icon w-100 h-100"
                >
                  <FaArrowRight />
                </ButtonToggle>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Section.Body>
    </Section>
  );
};

export default SectionExercises;
