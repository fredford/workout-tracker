import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import NoStatsOverlay from "../Misc/NoStatsOverlay";

const StatsBarChart = ({ data, options, show }) => {
  return (
    <div className="chart-area">
      {show ? <></> : <NoStatsOverlay show={show} />}
      <Bar data={data} options={optionsObj[options]} />
    </div>
  );
};

const optionsObj = {
  standard: {
    plugins: {
      legend: {
        display: false,
      },
    },

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
    plugins: {
      legend: {
        display: false,
      },
    },
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
  "no-aspect-no-zero": {
    bezierCurve: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        beginAtZero: false,
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  },
  "no-aspect-zero": {
    bezierCurve: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  },
};

export default StatsBarChart;
