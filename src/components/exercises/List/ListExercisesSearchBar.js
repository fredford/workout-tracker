import React from "react";

import { FaChevronUp, FaChevronDown, FaPlus } from "react-icons/fa";

const ListExerciseSearchBar = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ShowDirection = () => {
    if (props.isAscending) {
      return <FaChevronUp className="list-exercises__direction" />;
    } else {
      return <FaChevronDown className="list-exercises__direction" />;
    }
  };

  const changeDirection = () => {
    props.updateDirection();
  };

  const updateSearch = (e) => {
    props.updateSearch(e.target.value);
  };

  return (
    <div className="list-exercises__searchbar">
      <input
        id="direction-toggle"
        type="checkbox"
        onChange={changeDirection}
        checked={props.isAscending}
      />
      <label id="label-direction-toggle" htmlFor="direction-toggle">
        <ShowDirection />
      </label>
      <button className="list-exercises__add-button" onClick={handleShow}>
        <FaPlus /> <span>Add</span>
      </button>
      <div>
        {/*
        <Modal show={show} onHide={handleClose} className={theme}>
          <AddExercise
            newExercise={newExercise}
            isNull={false}
            handleClose={handleClose}
            addExercise={postExercise}
          />
        </Modal>
        */}
      </div>
      <input
        className="list-exercises__search"
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={updateSearch}
      />
    </div>
  );
};

export default ListExerciseSearchBar;
