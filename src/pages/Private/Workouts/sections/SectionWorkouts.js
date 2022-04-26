import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Card from "../../../../components/Cards/Card";
import Section from "../../../../components/Misc/Section";
import ListWorkoutOptions from "../components/ListWorkoutOptions";
import ButtonToggle from "../../../../components/Buttons/ButtonToggle";
import { useNavigate } from "react-router-dom";
import { resolve } from "../../../../services/utils";
import WorkoutsService from "../../../../services/workouts";

const SectionWorkouts = () => {
  const navigate = useNavigate();
  const [isAscending, setIsAscending] = useState(false);
  const [page, setPage] = useState(0);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    retrieveAllWorkouts();
  }, []);

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

  return (
    <Section>
      <Section.Header>Workout History</Section.Header>
      <Section.Body>
        <Card>
          <Card.Body>
            <ListWorkoutOptions />
            <Card.Bar />
            <div className="row">
              {React.Children.toArray(
                displayList.map((workout) => {
                  let date = new Date(workout.date);
                  return (
                    <div className="col-sm-6 mb-1" key={workout._id}>
                      <div
                        className="list-exercise__card"
                        onClick={() => navigate(`/workouts/${workout._id}`)}
                      >
                        <div className="d-flex flex-row">
                          <img
                            className="list-exercise__image standard-image me-3"
                            src={workoutTypeImg[workout.type]}
                            alt=""
                          />
                          <div className="mt-2">
                            <h6>{date.toDateString()}</h6>
                            <p>{workout.type}</p>
                          </div>
                        </div>
                      </div>
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
