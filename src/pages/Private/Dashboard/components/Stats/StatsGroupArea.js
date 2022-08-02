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
const StatsGroupArea = React.memo(function WrappedStatsGroupArea({ stats }) {
  // This is a component to display basic stats for the overall performance in the application
  let tempStats = [
    { title: "Top Area", subtitle: "-", data: "-" },
    { title: "Top Progress Wkly", subtitle: "-", data: "-" },
    { title: "Best Workout", subtitle: "-", data: "-" },
    { title: "Top Exercise", subtitle: "-", data: "-" },
  ];

  var displayStats = stats ? stats : tempStats;
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

export default StatsGroupArea;
