import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaWindowClose } from "react-icons/fa";

import Card from "../../../../components/Cards/Card";
import Button from "../../../../components/Buttons/Button";
import Section from "../../../../components/Misc/Section";
import ListWorkoutOptions from "../components/ListWorkoutOptions";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
import { useNavigate } from "react-router-dom";
import { resolve } from "../../../../services/utils";
import WorkoutsService from "../../../../services/workouts";
import WorkoutService from "../../../../services/workout";

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

  if (isAscending) {
    displayList.reverse();
  }

  const changeDirection = () => {
    setIsAscending(!isAscending);
  };

  const increasePage = () => {
    var newPage = page;

    if (workouts.length > 10) {
      setPage(++newPage);
    }
  };

  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };

  const deleteWorkout = async (id) => {
    const [data, error] = await resolve(WorkoutService.deleteById(id));

    setWorkouts(workouts.filter((workout) => workout._id !== id));
  };

  return (
    <Section>
      <Section.Header>Workout History</Section.Header>
      <Section.Body>
        <Card>
          <Card.Body>
            <ListWorkoutOptions />
            <Card.Bar />
            <div className="list-workouts grid-300">
              {React.Children.toArray(
                displayList.map((workout) => {
                  let date = new Date(workout.date);
                  return (
                    <div className="list-workouts__workout" key={workout._id}>
                      <div
                        className="list-workouts__workout-card"
                        onClick={() => navigate(`/workouts/${workout._id}`)}
                      >
                        <img
                          className="list-workouts__workout-image"
                          src={workoutTypeImg[workout.type]}
                          alt=""
                        />
                        <div className="list-workouts__workout-text">
                          <h5>{date.toDateString()}</h5>
                          <h6>{workout.type}</h6>
                        </div>
                      </div>
                      <button
                        className="btn set-button ms-5"
                        onClick={() => deleteWorkout(workout._id)}
                      >
                        <FaWindowClose size={25} />
                      </button>
                    </div>
                  );
                })
              )}
            </div>

            <div className="d-flex flex-row justify-content-center">
              <div className="button-icon me-2">
                <ButtonToggle
                  onChange={decreasePage}
                  className="line-height w-100 h-100"
                >
                  <FaArrowLeft />
                </ButtonToggle>
              </div>
              <div className="button-icon ms-2">
                <ButtonToggle
                  onChange={increasePage}
                  className="button-icon w-100 h-100"
                >
                  <FaArrowRight />
                </ButtonToggle>
              </div>
            </div>
          </Card.Body>
        </Card>
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
