import React, { useEffect, useState } from "react";
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

import { resolve } from "../../../../../services/utils";

import StatsService from "../../../../../services/stats";
import Button from "../../../../../components/Buttons/Button";

const ChartRecentActivity = () => {
  const [stats, setStats] = useState({});
  const [date, setDate] = useState("week");

  useEffect(() => {
    retrieveData();
  }, [date]);

  const retrieveData = async () => {
    const [data, error] = await resolve(
      StatsService.getDashboardActivity(date)
    );

    data ? setStats(data) : console.log(error);
  };

  let primaryColor = getComputedStyle(document.body).getPropertyValue(
    "--ac-faded"
  );
  let fadedColor = getComputedStyle(document.body).getPropertyValue(
    "--ac-primary"
  );

  var chartData = {
    labels: Object.keys(stats),
    datasets: [
      {
        lineTension: 0.5,
        label: "Workout",
        data: Object.values(stats),
        backgroundColor: primaryColor,
        borderColor: fadedColor,
        fill: true,
      },
    ],
  };

  return (
    <Card>
      <Card.Header>Recent Activity</Card.Header>
      <Card.Title className="text-muted">Repetitions Per Day</Card.Title>
      <Card.Body className="mt-3">
        <div className="dashboard__chart-dropdown">
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
        <StatsLineChart show data={chartData} options={"standard"} />
      </Card.Body>
    </Card>
  );
};

export default ChartRecentActivity;
