import React from "react";

import Card from "../../../../components/Cards/Card";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";

const SetProgressionChart = ({ stats, showStats }) => {
  const dataSet = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(stats),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };
  return (
    <Card>
      <Card.Header>Set Progression</Card.Header>
      <Card.Body className="mt-3">
        <StatsLineChart data={dataSet} options={"no-x"} show={showStats} />
      </Card.Body>
    </Card>
  );
};

export default SetProgressionChart;
