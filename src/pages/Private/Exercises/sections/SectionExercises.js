import React, { useContext, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { ActivityContext } from "../../../../contexts/activityContext";

import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import ActivityToggles from "../../../../components/Misc/ActivityToggles";
import ListExercisesUserOptions from "../components/ListExercisesUserOptions";
import ListExerciseSearchBar from "../components/ListExercisesSearchBar";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ListExercisesExercise from "../components/ListExercisesExercise";
import Button from "../../../../components/Buttons/Button";

const SectionExercises = () => {
  // Redux State
  const exercises = useSelector((state) => state.exercises.exercises);
  // Context variables
  const activities = useContext(ActivityContext);
  // State variables
  const [userOnly, setUserOnly] = useState(false);
  const [isAscending, setIsAscending] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(0);

  useEffect(() => {
    setPage(0);
  }, [activities]);

  var displayList = [...exercises];

  //var displayList = exercises.slice(page * 10, page * 10 + 10);

  var isAllOff = Object.values(activities).every((x) => x[0] === false);

  // Filter list for User Only
  displayList = displayList.filter((item) => !userOnly || !item.isAdmin);
  // Filter current search items
  displayList = displayList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isAllOff) {
    displayList = displayList.filter(
      (item) => activities[item.area.toLowerCase()][0]
    );
  }

  if (isAscending) {
    displayList.reverse();
  }

  if (displayList.length > 10) {
    displayList = displayList.slice(page * 10, page * 10 + 10);
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
            <div className="list-exercises__container">
              {React.Children.toArray(
                displayList.map((exercise) => {
                  var area = exercise.area.toLowerCase();
                  var isAllOff = Object.values(activities).every(
                    (x) => x[0] === false
                  );
                  if (isAllOff || activities[area][0]) {
                    return <ListExercisesExercise exercise={exercise} />;
                  } else {
                    return <></>;
                  }
                })
              )}
            </div>
            <div className="d-flex flex-row justify-content-center">
              <Button
                onClick={decreasePage}
                border
                className="me-2 button-icon"
              >
                <Button.Icon>
                  <FaArrowLeft />
                </Button.Icon>
              </Button>

              <Button
                onClick={increasePage}
                className="ms-2 button-icon"
                border
              >
                <Button.Icon>
                  <FaArrowRight />
                </Button.Icon>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Section.Body>
    </Section>
  );
};

export default SectionExercises;
