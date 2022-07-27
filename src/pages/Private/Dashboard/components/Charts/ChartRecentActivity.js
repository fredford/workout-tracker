// Library imports
import React, { useEffect, useState } from "react";

// Local component imports
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

// Utilities
import useApi from "../../../../../services/useApi";
import StatsService from "../../../../../services/stats";

/**
 * Component that displays a chart of recent workout activity in the application
 *
 * Status: complete
 */
const ChartRecentActivity = () => {
  // State variables for chart stats and date range for viewing
  const [stats, setStats] = useState({});
  const [date, setDate] = useState("week");

  // API GET call to retrieve the recent workout activity from the server
  const { data } = useApi(StatsService.getDashboardActivity, [date]);

  // Handle data retrieved for the component state
  useEffect(() => {
    // Set the data for the stats of the activity chart
    if (data) setStats(data);
  }, [data]);

  // Get the CSS property value for the faded accent color of the application
  let fadedColor = getComputedStyle(document.body).getPropertyValue(
    "--background-acce"
  );
  // Get the CSS property value for the primary accent color of the application
  let primaryColor = getComputedStyle(document.body).getPropertyValue(
    "--foreground-acce"
  );
  // Set the chart data settings for ChartJS
  var chartData = {
    labels: Object.keys(stats),
    datasets: [
      {
        lineTension: 0.5,
        label: "Workout",
        data: Object.values(stats),
        backgroundColor: fadedColor,
        borderColor: primaryColor,
        fill: true,
      },
    ],
  };

  return (
    <Card>
      <Card.Header>Recent Activity</Card.Header>
      <Card.Subtitle className="text-muted">Repetitions Per Day</Card.Subtitle>
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
