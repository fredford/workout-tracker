import React from "react";

const StatsCards = ({ statsObject, className }) => {
  let containerClassName = `stats-container ${className}`;
  return (
    <div className={containerClassName}>
      {Object.entries(statsObject).map(([key, value]) => {
        return (
          <div key={key} className="stats-card">
            <h1 className="stats-card__number">{value}</h1>
            <h6 className="stats-card__name">{key}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
