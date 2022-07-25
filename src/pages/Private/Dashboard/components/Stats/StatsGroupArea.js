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
    { title: "Top Area", subtitle: "Lower", data: 0 },
    { title: "Weekly Progress", subtitle: "Upper", data: "+5%" },
    { title: "-", subtitle: "-", data: "-" },
    { title: "-", subtitle: "-", data: "-" },
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
});

export default StatsGroupArea;
