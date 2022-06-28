import React from "react";

import Card from "../../../../components/Cards/Card";
import StatsLineChart from "../../../../components/Stats/StatsLineChart";

const CumulativeChart = ({ stats, showStats }) => {
  const dataCumulative = {
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
      <Card.Header>Cumulative Repetitions</Card.Header>
      <Card.Body className="mt-3">
        <StatsLineChart
          data={dataCumulative}
          options={"standard"}
          show={showStats}
        />
      </Card.Body>
    </Card>
  );
};

export default CumulativeChart;
