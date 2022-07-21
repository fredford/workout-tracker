import React from "react";
import StatsCard from "../../../../../components/Stats/StatsCard";

const StatsGroupBasic = ({ stats }) => {
  // This is a component to display basic stats for the overall performance in the application

  let tempStats = [
    { title: "Top Exercise", subtitle: "-", data: 0 },
    { title: "Top Average", subtitle: "-", data: 0 },
    { title: "Sets", subtitle: "Completed", data: 0 },
    { title: "Workouts", subtitle: "Completed", data: 0 },
  ];

  var displayStats = stats ? stats : tempStats;

  return (
    <div className="grid-125">
      {displayStats.map((stat, index) => {
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
