import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaWindowClose } from "react-icons/fa";

import Card from "../../../../components/Cards/Card";

import Section from "../../../../components/Misc/Section";

import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
import { useNavigate } from "react-router-dom";
import { resolve } from "../../../../services/utils";
import WorkoutsService from "../../../../services/workouts";
import WorkoutService from "../../../../services/workout";
import Button from "../../../../components/Buttons/Button";

const SectionWorkouts = () => {
  const navigate = useNavigate();
  const [isAscending, setIsAscending] = useState(false);
  const [page, setPage] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    retrieveAllWorkouts();
  }, [JSON.stringify(workouts)]);

  const retrieveAllWorkouts = async () => {
    const [data, error] = await resolve(WorkoutsService.getAll());

    if (data) {
      setWorkouts(data);
    }
  };

  var displayList = [...workouts];

  if (displayList.length > 10) {
    displayList = displayList.slice(page * 10, page * 10 + 10);
  }

  const increasePage = () => {
    var newPage = page;

    let maxPage = Math.floor(workouts.length / 10);

    if (workouts.length > 10 && maxPage > page) {
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
