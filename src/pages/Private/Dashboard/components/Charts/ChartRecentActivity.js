import React, { useEffect, useState } from "react";
import Card from "../../../../../components/Cards/Card";
import StatsLineChart from "../../../../../components/Stats/StatsLineChart";

import { resolve } from "../../../../../services/utils";

import StatsService from "../../../../../services/stats";

const ChartRecentActivity = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(StatsService.getDashboardDataBasic());

    data ? setStats(data) : console.log(error);
  };

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
