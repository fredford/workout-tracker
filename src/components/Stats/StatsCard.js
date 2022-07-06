import React from "react";

const StatsCard = ({ data, title, subtitle, className }) => {
  let statsCardClassName = `stats-card ${className}`;
  return (
    <div className={statsCardClassName}>
      <h1 className="stats-card__number">{data.toString()}</h1>
      <h5 className="stats-card__name">{title}</h5>
      {subtitle ? <h6 className="">{subtitle}</h6> : <></>}
    </div>
  );
};

export default StatsCard;
