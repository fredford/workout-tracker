// Library import
import React from "react";

/**
 * Component that displays a provided piece of data
 */
const StatsCard = React.memo(function WrappedStatsCard({
  data,
  title,
  subtitle,
  className,
}) {
  let statsCardClassName = `stats-card ${className}`;
  return (
    <div className={statsCardClassName}>
      <h5>{title}</h5>
      {subtitle ? <h6>{subtitle}</h6> : <></>}
      <h1>{data.toString()}</h1>
    </div>
  );
});

export default StatsCard;
