import React from "react";
import StatsCard from "../../../../../components/Stats/StatsCard";

const StatsGroupBasic = () => {
  // This is a component to display basic stats for the overall performance in the application
  const stats = [
    { title: "Top Exercise", subtitle: "Squats", data: 50042 },
    { title: "Top Average", subtitle: "Push-ups", data: 100 },
    { title: "Sets", subtitle: "Completed", data: 1012 },
    { title: "Workouts", subtitle: "Completed", data: 115 },
  ];
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
