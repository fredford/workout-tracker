// Library imports
import React from "react";

// Local component imports
import StatsCard from "../../../../../components/Stats/StatsCard";

/**
 * Component container handling the display of overall performance stats for
 * the user in the application.
 *
 * Status: complete
 */
const StatsGroupBasic = React.memo(function WrappedStatsGroupBasic({ stats }) {
  let tempStats = [
    { title: "Total", subtitle: "Repetitions", data: 0 },
    { title: "Top Average", subtitle: "-", data: 0 },
    { title: "Sets", subtitle: "Completed", data: 0 },
    { title: "Workouts", subtitle: "Completed", data: 0 },
  ];

  let displayStats = stats ? stats : tempStats;

  return (
    <div className="stats-grid">
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
});

export default StatsGroupBasic;
