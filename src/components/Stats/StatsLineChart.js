import React from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import NoStatsOverlay from "../Misc/NoStatsOverlay";

const StatsLineChart = ({ data, options, show }) => {
  return (
    <div className="chart-area">
      {show ? <></> : <NoStatsOverlay show={show} />}
      <Line data={data} options={optionsObj[options]} />
    </div>
  );
};

const optionsObj = {
  standard: {
    responsive: true,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
  "no-x": {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: true,
        beginAtZero: true,
        ticks: {
          beginAtZero: true,
        },
      },
    },
  },
};

export default StatsLineChart;
