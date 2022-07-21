import React, { useEffect, useState } from "react";
import StatsCard from "../../../../../components/Stats/StatsCard";
import { resolve } from "../../../../../services/utils";

import StatsService from "../../../../../services/stats";

const StatsGroupBasic = () => {
  // This is a component to display basic stats for the overall performance in the application

  const [stats, setStats] = useState([
    { title: "Top Exercise", subtitle: "-", data: 0 },
    { title: "Top Average", subtitle: "-", data: 0 },
    { title: "Sets", subtitle: "Completed", data: 0 },
    { title: "Workouts", subtitle: "Completed", data: 0 },
  ]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(StatsService.getDashboardDataBasic());

    data ? setStats(data) : console.log(error);
  };

  return (
    <div className="grid-125">
      {stats.map((stat, index) => {
        return (
          <StatsCard
            key={index}
            data={stat.data}
            title={stat.title}
            subtitle={stat.subtitle}
          />
        );
      })}
    </div>
  );
};

export default StatsGroupBasic;
