import React from "react";

import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Button from "../../../../components/Buttons/Button";
import Form from "../../../../components/Forms/Form";
import AddExercise from "./AddExercise";

const ListExerciseSearchBar = (props) => {
  const ShowDirection = () => {
    if (props.isAscending) {
      return <FaChevronUp />;
    } else {
      return <FaChevronDown />;
    }
  };

  const changeDirection = () => {
    props.updateDirection();
  };

  const updateSearch = (e) => {
    props.updateSearch(e);
  };

  return (
    <div className="list-exercises__searchbar">
      <div className="d-flex w-100">
        <Button
          id="toggle-direction"
          onClick={changeDirection}
          className="button-icon me-3"
          border
        >
          <Button.Icon>
            <ShowDirection />
          </Button.Icon>
        </Button>

        <div className="me-3 line-height">
          <AddExercise />
        </div>
        <div className="flex-fill">
          <Form className="w-100">
            <Form.Input
              id="searchbar"
              value={props.search}
              onChange={updateSearch}
              placeholder="Search"
              type="text"
              className="w-100"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ListExerciseSearchBar;
