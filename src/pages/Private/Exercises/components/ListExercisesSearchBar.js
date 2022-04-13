import { FourMpRounded } from "@mui/icons-material";
import React from "react";

import { FaChevronUp, FaChevronDown, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
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
        <div className="me-3 button-icon">
          <ButtonToggle
            id="toggle-direction"
            checked={props.isAscending}
            onChange={changeDirection}
            className="line-height w-100 h-100"
          >
            <ShowDirection />
          </ButtonToggle>
        </div>

        <div className="me-3">
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
