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
    <ActivityProvider>
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
            </Card.Body>
          </Card>
        </Section.Body>
      </Section>
    </ActivityProvider>
  );
};

export default SectionExercises;
