import React from "react";
import StatsLineChart from "../Stats/StatsLineChart";
import BasicCard from "./BasicCard";

/**
 * Component for displaying a React ChartJS chart on a Card component
 * @param header string - title for the chart
 * @param stats list - the dataset to be used
 * @param showStats boolean - to determine if the data should be shown
 * @param options string - options specifications to be used
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const CardChart = ({ header, stats, showStats, options = "standard" }) => {
  // Get the CSS property value for the faded accent color of the application
  let fadedColor = getComputedStyle(document.body).getPropertyValue("--background-acce");
  // Get the CSS property value for the primary accent color of the application
  let primaryColor = getComputedStyle(document.body).getPropertyValue("--foreground-acce");

  // Data object for React-ChartJS
  const data = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: { header },
        data: Object.values(stats),
        backgroundColor: fadedColor,
        borderColor: primaryColor,
        fill: true,
      },
    ],
  };
  return (
    <BasicCard title={header}>
      <StatsLineChart data={data} options={options} show={showStats} />
    </BasicCard>
  );
};

export default CardChart;
