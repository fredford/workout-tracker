import React from "react";
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

const ChartRecentActivity = () => {
  return (
    <Card>
      <Card.Header>Recent Activity</Card.Header>
      <Card.Body>
        <StatsLineChart show />
      </Card.Body>
    </Card>
  );
};

export default ChartRecentActivity;
