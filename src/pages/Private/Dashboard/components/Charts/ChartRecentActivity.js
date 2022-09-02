// Library imports
import React, { useEffect, useState } from "react";

// Local component imports
import Card from "../../../../../components/Cards/Card";
import BasicCard from "../../../../../components/Cards/BasicCard";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

// Utilities
import services from "../../../../../services/services";

/**
 * Component that displays a chart of recent workout activity in the application
 *
 * Status: complete
 */
const ChartRecentActivity = () => {
  // State variables for chart stats and date range for viewing
  const [stats, setStats] = useState({});
  const [date, setDate] = useState("week");

  // Handle data retrieved for the component state
  useEffect(() => {
    // API GET call to retrieve the recent workout activity from the server
    const retrieveData = async () => {
      await services.stats.getDashboardActivity(date, setStats);
    };
    retrieveData();
  }, [date]);

  // Get the CSS property value for the faded accent color of the application
  let fadedColor = getComputedStyle(document.body).getPropertyValue("--background-acce");
  // Get the CSS property value for the primary accent color of the application
  let primaryColor = getComputedStyle(document.body).getPropertyValue("--foreground-acce");
  // Set the chart data settings for ChartJS
  let chartData = {
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
    <BasicCard title="Recent Activity" subtitle="Repetitions Per Day" className="w-100">
      <div className="dashboard__chart-container">
        <StatsLineChart show data={chartData} options={"standard"} />
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
    </BasicCard>
  );
};

export default ChartRecentActivity;
