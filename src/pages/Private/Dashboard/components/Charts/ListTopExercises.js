// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Local component imports
import BasicCard from "../../../../../components/Cards/BasicCard";

// Utilities
import services from "../../../../../services/services";

/**
 * Component that displays a list of the top exercises in the application
 *
 * Status: complete
 */
const ListTopExercises = () => {
  // Library Hooks
  const navigate = useNavigate();

  // State variables for current date and area range
  const [stats, setStats] = useState([]);
  const [date, setDate] = useState("week");
  const [area, setArea] = useState("all");

  // Handle data retrieved for the component state
  useEffect(() => {
    // API GET call to retrieve the top exercises in the application
    const retrieveData = async () => {
      await services.stats.getTopExercises(area, date, 5, setStats);
    };
    retrieveData();
  }, [area, date]);

  // Function to handle redirecting the user to the exercise they have clicked on
  const openExercise = (id) => {
    navigate(`/exercises/${id}`);
  };

  return (
    <BasicCard title="Top Exercises" className="w-100">
      <div className="dashboard__chart-container">
        <table className="top-exercises__container">
          <thead>
            <tr className="top-exercises__headers">
              <th className="top-exercises__exercise">Exercise</th>
              <th>Reps</th>
              <th>Sets</th>
              <th>Avg.</th>
              <th>Max</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat) => {
              return (
                <tr
                  key={stat.name}
                  className="top-exercises__item"
                  onClick={() => openExercise(stat.exerciseId)}
                >
                  <td className="top-exercises__exercise">{stat.name}</td>
                  <td>{stat.Reps}</td>
                  <td>{stat.Sets}</td>
                  <td>{stat.Avg}</td>
                  <td>{stat.Max}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="dashboard__table-dropdown">
          <select
            className="dashboard__table-dropdown-menu"
            onChange={(e) => setArea(e.target.value)}
            value={area}
          >
            <option value="all">All</option>
            <option value="upper">Upper</option>
            <option value="lower">Lower</option>
            <option value="core">Core</option>
            <option value="cardio">Cardio</option>
          </select>
          <select
            className="dashboard__table-dropdown-menu"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="alltime">All-Time</option>
          </select>
        </div>
      </div>
    </BasicCard>
  );
};

export default ListTopExercises;
