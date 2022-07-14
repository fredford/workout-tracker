import React from "react";
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

const ChartTopExercises = () => {
  return (
    <Card>
      <Card.Header>Top Exercises</Card.Header>
      <Card.Body>
        <StatsLineChart show />
      </Card.Body>
    </Card>
  );
};

export default ChartTopExercises;
