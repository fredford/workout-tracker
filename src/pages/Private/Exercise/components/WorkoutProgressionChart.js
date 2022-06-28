import React from "react";

import Card from "../../../../components/Cards/Card";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";

const WorkoutProgressionChart = ({ stats, showStats }) => {
  const dataWorkout = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: "Workout",
        data: Object.values(stats),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };
  return (
    <Card>
      <Card.Header>Workout Progression</Card.Header>
      <Card.Body className="mt-3">
        <StatsLineChart
          data={dataWorkout}
          options={"standard"}
          show={showStats}
        />
      </Card.Body>
    </Card>
  );
};

export default WorkoutProgressionChart;
