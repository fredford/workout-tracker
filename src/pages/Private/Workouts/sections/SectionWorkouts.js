// Library imports
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Local component imports
import BasicCard from "../../../../components/Cards/BasicCard";
import Section from "../../../../components/Misc/Section";
import Button from "../../../../components/Buttons/Button";

/**
 * Section to display the Workout History in the form of a Card list
 * @returns {JSX.Element}
 * @constructor
 */
const SectionWorkouts = ({ workouts }) => {
  // React hooks
  const navigate = useNavigate();

  // Component state
  const [page, setPage] = useState(0);

  let numPages = Math.floor(workouts.length / 10);

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
    <BasicCard title="Workout History">
      <div className="list-workouts">
        {React.Children.toArray(
          displayList.map((workout) => {
            let date = new Date(workout.date);
            return (
              <div className="list-workouts__workout" key={workout._id}>
                <div
                  className="list-workouts__workout-card"
                  onClick={() => navigate(`/workouts/${workout._id}`)}
                >
                  <div className="list-workouts__workout-body">
                    <img
                      className="list-workouts__workout-image"
                      src={workoutTypeImg[workout.type]}
                      alt=""
                    />
                    <div className="list-workouts__workout-text">
                      <h5>{date.toDateString()}</h5>
                      <p className="list-workouts__workout-name">
                        <span className="list-workouts__workout-stat-group">
                          Reps<span className="list-workouts__workout-stat">{workout.Reps}</span>
                        </span>
                        <span className="list-workouts__workout-stat-group">
                          Sets <span className="list-workouts__workout-stat">{workout.Sets}</span>
                        </span>
                        <span className="list-workouts__workout-stat-group">
                          Avg <span className="list-workouts__workout-stat">{workout.Avg}</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="d-flex flex-row justify-content-center">
        {page > 0 ? (
          <Button iconOnly Icon={FaArrowLeft} onClick={decreasePage} className="me-3" />
        ) : (
          <></>
        )}
        {numPages > 0 ? <Button iconOnly Icon={FaArrowRight} onClick={increasePage} /> : <></>}
      </div>
    </BasicCard>
  );
};

const workoutTypeImg = {
  Progression: "./progression.png",
  Maintenance: "./maintenance.png",
  "Single Set Max": "./max.png",
};

export default SectionWorkouts;
