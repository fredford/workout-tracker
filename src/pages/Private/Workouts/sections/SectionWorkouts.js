// Library imports
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Local component imports
import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import Button from "../../../../components/Buttons/Button";

// Local services
import WorkoutsService from "../../../../services/workouts";
import api from "../../../../services/sendRequest";

/**
 * Section to display the Workout History in the form of a Card list
 * @returns {JSX.Element}
 * @constructor
 */
const SectionWorkouts = () => {
  // React hooks
  const navigate = useNavigate();

  // Component state
  const [page, setPage] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    retrieveAllWorkouts();
  }, [JSON.stringify(workouts)]);

  // Function to retrieve User Workouts from the server
  const retrieveAllWorkouts = async () => {
    api.fetch(WorkoutsService.getAll(), setWorkouts)
  };

  // Create a list that can be manipulated to display only specified Workouts
  let displayList = [...workouts];
  // Only display 10 Workouts at a time on the current page
  if (displayList.length > 10) {
    displayList = displayList.slice(page * 10, page * 10 + 10);
  }
  // Function to increment the page number if more pages are available
  const increasePage = () => {
    let newPage = page;

    let maxPage = Math.floor(workouts.length / 10);

    // If the current page is less than the max number of pages computed
    if (workouts.length > 10 && maxPage > page) {
      setPage(++newPage);
    }
  };

  // Function to decrement the page number until the first page
  const decreasePage = () => {
    let newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  return (
    <Section>
      <Section.Header>Workout History</Section.Header>
      <Section.Body>
        <div className="list-workouts">
          {React.Children.toArray(
            displayList.map((workout) => {
              let date = new Date(workout.date);
              return (
                <div className="list-workouts__workout" key={workout._id}>
                  <Card
                    className="list-workouts__workout-card"
                    onClick={() => navigate(`/workouts/${workout._id}`)}
                  >
                    <Card.Body className="list-workouts__workout-body">
                      <img
                        className="list-workouts__workout-image"
                        src={workoutTypeImg[workout.type]}
                        alt=""
                      />
                      <div className="list-workouts__workout-text">
                        <h5>{date.toDateString()}</h5>
                        <h6>{workout.type}</h6>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          )}
        </div>

        <div className="d-flex flex-row justify-content-center">
          <Button onClick={decreasePage} border className="me-2 button-icon">
            <Button.Icon>
              <FaArrowLeft />
            </Button.Icon>
          </Button>

          <Button onClick={increasePage} className="ms-2 button-icon" border>
            <Button.Icon>
              <FaArrowRight />
            </Button.Icon>
          </Button>
        </div>
      </Section.Body>
    </Section>
  );
};

const workoutTypeImg = {
  Progression: "./progression.png",
  Maintenance: "./maintenance.png",
  "Single Set Max": "./max.png",
};

export default SectionWorkouts;
