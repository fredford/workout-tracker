import React from "react";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import NoStatsOverlay from "../Misc/NoStatsOverlay";

const StatsLineChart = ({ data, options, show }) => {
  return (
    <div className="chart-area">
      {show ? <></> : <NoStatsOverlay show={show} />}
      <Line className="h-100" data={data ? data : tempData} options={optionsObj[options]} />
    </div>
  );
};

const tempStats = {
  "2022-6-21": 15,
  "2022-6-22": 25,
  "2022-6-23": 20,
  "2022-6-24": 30,
  "2022-6-25": 20,
  "2022-6-26": 35,
};

const tempData = {
  labels: Object.keys(tempStats),
  datasets: [
    {
      label: "Workout",
      data: Object.values(tempStats),
      backgroundColor: "slategrey",
      borderColor: "skyblue",
      fill: false,
    },
  ],
};

const optionsObj = {
  standard: {
    bezierCurve: true,
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

export default StatsLineChart;
