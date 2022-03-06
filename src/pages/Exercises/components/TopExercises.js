// Imported Modules
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Page Components
import ActivityToggles from "../../../components/utility/ActivityToggles";

// Helper Components
import Card from "../../../components/cards/Card";

// Contexts
import { ActivityContext } from "../../../contexts/activityContext";

const TopExercises = () => {
  const exercises = useSelector((state) => state.exercises.exercises);
  const activities = useContext(ActivityContext);

  const [page, setPage] = React.useState(0);

  var displayList = [...exercises];

  const increasePage = () => {
    var newPage = page;

    if (exercises.length === 10) {
      setPage(++newPage);
    }
  };

  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  return (
    <Card className="sections-card">
      <ActivityToggles />
      <hr />
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Muscles</th>
          </tr>
        </thead>
        <tbody className="list-exercise__table">
          {React.Children.toArray(
            displayList.map((exercise) => {
              var area = exercise.area.toLowerCase();
              var name = exercise.name.toLowerCase();

              var isAllOff = Object.values(activities).every(
                (x) => x[0] === false
              );

              if (isAllOff || activities[area][0]) {
                return (
                  <tr id={exercise.area} key={exercise.id}>
                    <td>{exercise.name}</td>
                    <td>{exercise.type}</td>
                    <td>{exercise.muscles}</td>
                  </tr>
                );
              }
            })
          )}
        </tbody>
      </Table>
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
};

export default TopExercises;
