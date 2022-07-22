import React, { useEffect, useState } from "react";
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

import { resolve } from "../../../../../services/utils";
import StatsService from "../../../../../services/stats";
import { useNavigate } from "react-router-dom";

const ChartTopExercises = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState([]);
  const [date, setDate] = useState("week");
  const [area, setArea] = useState("all");

  useEffect(() => {
    retrieveData();
  }, [date, area]);

  const retrieveData = async () => {
    const [data, error] = await resolve(
      StatsService.getTopExercises(area, date)
    );

    data ? setStats(data) : console.log(error);
  };

  const openExercise = (id) => {
    navigate(`/exercises/${id}`);
  };

  return (
    <Card>
      <Card.Header>Top Exercises</Card.Header>
      <Card.Body className="">
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
            className="dashboard__chart-dropdown-menu"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
            <option value="alltime">All-Time</option>
          </select>
        </div>
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
                  <td>{stat.repCount}</td>
                  <td>{stat.setCount}</td>
                  <td>{stat.avgReps}</td>
                  <td>{stat.maxReps}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/*<StatsLineChart show data={chartData} options={"standard"} />*/}
      </Card.Body>
    </Card>
  );
};

export default ChartTopExercises;
