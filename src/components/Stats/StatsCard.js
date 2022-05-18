import React from "react";

const StatsCard = ({ data, title, className }) => {
  let statsCardClassName = `stats-card ${className}`;
  return (
    <div className={statsCardClassName}>
      <h1 className="stats-card__number">{data.toString()}</h1>
      <h6 className="stats-card__name">{title}</h6>
    </div>
  );
};

export default StatsCard;
