// Library import
import React from "react";

/**
 * Component that displays a piece of data with a title and subtitle associated to it
 * @param data the piece of information you want to display (string or number)
 * @param title the larger text to be displayed describing the data
 * @param subtitle the subtext that elaborates on the title
 * @param className string for added CSS class specifications
 * @type {React.NamedExoticComponent<{readonly data?: *, readonly subtitle?: *, readonly className?: *, readonly title?: *}>}
 *
 * Status: completed
 */
const CardStats = React.memo(function WrappedStatsCard({
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

export default CardStats;
