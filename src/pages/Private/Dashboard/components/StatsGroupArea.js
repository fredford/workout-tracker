import React from "react";
import StatsCard from "../../../../components/Stats/StatsCard";

const StatsGroupArea = () => {
  // This is a component to display basic stats for the overall performance in the application
  const stats = [
    { title: "Top Area", subtitle: "Lower", data: 50042 },
    { title: "Weekly Progress", subtitle: "Upper", data: "+5%" },
    { title: "-", subtitle: "-", data: "-" },
    { title: "-", subtitle: "-", data: "-" },
  ];
  return (
    <div className="grid-4-item">
      {stats.map((stat) => {
        return (
          <StatsCard
            key={stat.title}
            data={stat.data}
            title={stat.title}
            subtitle={stat.subtitle}
          />
        );
      })}
    </div>
  );
};

export default StatsGroupArea;
