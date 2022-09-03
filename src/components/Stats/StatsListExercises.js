// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Local component imports
import BasicCard from "../Cards/BasicCard";
import Button from "../Buttons/Button";

/**
 * Component that displays a list of the top exercises in the application
 *
 * Status: complete
 */
const StatsListExercises = ({ stats, dateState = "all", areaState = "all", path, className }) => {
  // Library Hooks
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    setPage(0);
    setNumPages(Math.ceil(stats.length / 5));
  }, [stats]);

  let displayList = [...stats];

  // If there are more exercises than 10 divide into pages
  if (displayList.length > 5) {
    displayList = displayList.slice(page * 5, page * 5 + 5);
  }

  // Increase the current page number
  const increasePage = () => {
    var newPage = page;

    if (stats.length > 5) {
      setPage(++newPage);
    }
  };
  // Decrease the current page number to a minimum of zero
  const decreasePage = () => {
    var newPage = page;

    if (page > 0) {
      setPage(--newPage);
    }
  };
  // Function to handle redirecting the user to the exercise they have clicked on
  const openExercise = (id) => {
    navigate(`/${path}/${id}`);
  };

  return (
    <BasicCard className={className} title={`Top ${path}`}>
      <div className="relative-block">
        <div className="dashboard__table-dropdown">
          <select
            className="dashboard__table-dropdown-menu"
            onChange={(e) => areaState[1](e.target.value)}
            value={areaState[0]}
          >
            {Object.keys(menus.areas[path]).map((key) => {
              return (
                <option key={key} value={key}>
                  {menus.areas[path][key]}
                </option>
              );
            })}
          </select>
          {path === "exercises" && (
            <select
              className="dashboard__table-dropdown-menu"
              onChange={(e) => {
                dateState[1](e.target.value);
              }}
              value={dateState[0]}
            >
              <option value="week">Week</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
              <option value="alltime">All-Time</option>
            </select>
          )}
        </div>
        <table className="top-exercises__container">
          <thead>
            <tr className="top-exercises__headers">
              <th className="top-exercises__exercise">Exercise</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Avg.</th>
              {path === "exercises" ? <th>Max</th> : <></>}
            </tr>
          </thead>
          <tbody>
            {displayList.map((stat) => {
              let title = path === "exercises" ? stat.name : new Date(stat.date).toDateString();

              return (
                <tr
                  key={title}
                  className="top-exercises__item"
                  onClick={() => openExercise(stat.exerciseId)}
                >
                  <td className="top-exercises__exercise">{title}</td>
                  <td>{stat.Reps}</td>
                  <td>{stat.Sets}</td>
                  <td>{stat.Avg}</td>
                  {path === "exercises" ? <td>{stat.Max}</td> : <></>}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="d-flex flex-row justify-content-center large-gap">
          {page > 0 ? <Button iconOnly Icon={FaArrowLeft} onClick={decreasePage} /> : <></>}
          {numPages > 1 ? <Button iconOnly Icon={FaArrowRight} onClick={increasePage} /> : <></>}
        </div>
      </div>
    </BasicCard>
  );
};

const menus = {
  areas: {
    exercises: {
      all: "All",
      upper: "Upper",
      lower: "Lower",
      core: "Core",
      cardio: "Cardio",
    },
    workouts: {
      maintenance: "Maintenance",
      progression: "Progression",
      singleSet: "Single Set",
    },
  },
};

export default StatsListExercises;
