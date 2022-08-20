// Library imports
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Local component imports
import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import ActivityToggles from "../../../../components/Misc/ActivityToggles";
import ListExercisesUserOptions from "../components/ListExercisesUserOptions";
import ListExerciseSearchBar from "../components/ListExercisesSearchBar";
import ListExercisesExercise from "../components/ListExercisesExercise";
import Button from "../../../../components/Buttons/Button";

// Contexts
import { ActivityContext } from "../../../../contexts/activityContext";

/**
 * Section handling the display of the Exercises List component with functionality for display handling
 *
 * Status: complete
 */
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

  let displayList = [...exercises];

  //var displayList = exercises.slice(page * 10, page * 10 + 10);

  let isAllOff = Object.values(activities).every((x) => x[0] === false);

  // Filter list for User Only
  displayList = displayList.filter((item) => !userOnly || !item.isAdmin);
  // Filter current search items
  displayList = displayList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // If at least one filter has been applied
  if (!isAllOff) {
    displayList = displayList.filter((item) => activities[item.area.toLowerCase()][0]);
  }

  // If the state is set to show in ascending order
  if (isAscending) {
    displayList.reverse();
  }

  // If there are more exercises than 10 divide into pages
  if (displayList.length > 10) {
    displayList = displayList.slice(page * 10, page * 10 + 10);
  }

  // Function to change the direction of the list displayed
  const changeDirection = () => {
    setIsAscending(!isAscending);
  };

  // Increase the current page number
  const increasePage = () => {
    var newPage = page;

    if (exercises.length > 10) {
      setPage(++newPage);
    }
  };
  // Decrease the current page number to a minimum of zero
  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  // Set the display to only show User created exercises
  const changeUserOnly = () => {
    setUserOnly(!userOnly);
  };
  // Set the search term for the exercises
  const changeSearch = (term) => {
    setSearch(term);
  };

  return (
    <Section>
      <Section.Body>
        <Card>
          <Card.Body>
            <ActivityToggles />
            <ListExercisesUserOptions userClicked={userOnly} changeUserClicked={changeUserOnly} />
            <ListExerciseSearchBar
              isAscending={isAscending}
              changeDirection={changeDirection}
              search={search}
              changeSearch={changeSearch}
            />
            <Card.Bar />
            <div className="list-exercises__container">
              {React.Children.toArray(
                displayList.map((exercise) => {
                  var area = exercise.area.toLowerCase();
                  var isAllOff = Object.values(activities).every((x) => x[0] === false);
                  if (isAllOff || activities[area][0]) {
                    return <ListExercisesExercise exercise={exercise} />;
                  } else {
                    return <></>;
                  }
                })
              )}
            </div>
            <div className="d-flex flex-row justify-content-center large-gap">
              <Button iconOnly Icon={FaArrowLeft} onClick={decreasePage} />
              <Button iconOnly Icon={FaArrowRight} onClick={increasePage} />
            </div>
          </Card.Body>
        </Card>
      </Section.Body>
    </Section>
  );
};

export default SectionExercises;
