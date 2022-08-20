// Library imports
import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// Local component imports
import Button from "../../../../components/Buttons/Button";
import Form from "../../../../components/Forms/Form";
import AddExercise from "./AddExercise";

/**
 * Component to handle the sort direction, adding an exercise and searching the exercise list
 *
 * Status: complete
 */
const ListExerciseSearchBar = ({ isAscending, changeDirection, changeSearch, search }) => {
  // Change the direction for displaying the exercises
  const updateDirection = () => {
    changeDirection();
  };
  // Change the input search for exercises
  const updateSearch = (e) => {
    changeSearch(e);
  };

  return (
    <div className="list-exercises__searchbar">
      <Button iconOnly Icon={isAscending ? FaChevronUp : FaChevronDown} onClick={updateDirection} />
      <div className="line-height">
        <AddExercise />
      </div>
      <Form className="w-100 flex-fill">
        <Form.Input
          id="searchbar"
          value={search}
          onChange={updateSearch}
          placeholder="Search"
          type="text"
          className="w-100"
        />
      </Form>
    </div>
  );
};

export default ListExerciseSearchBar;
