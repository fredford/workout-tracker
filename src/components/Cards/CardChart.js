import React from "react";
import StatsLineChart from "../Stats/StatsLineChart";
import Card from "./Card";

const CardChart = ({ header, stats, showStats, options = "standard" }) => {
  // Get the CSS property value for the faded accent color of the application
  let fadedColor = getComputedStyle(document.body).getPropertyValue(
    "--background-acce"
  );
  // Get the CSS property value for the primary accent color of the application
  let primaryColor = getComputedStyle(document.body).getPropertyValue(
    "--foreground-acce"
  );

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
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body className="mt-3">
        <StatsLineChart data={data} options={options} show={showStats} />
      </Card.Body>
    </Card>
  );
};

export default CardChart;
