import React from "react";

const WorkoutExerciseStats = ({ numSets, avgSets, maxSet, sumSets }) => {
  const data = {
    Sets: numSets,
    Avg: avgSets,
    Max: maxSet,
    Total: sumSets,
  };

  return (
    <div className="workout-sets-repetitions__stats-container">
      {Object.entries(data).map(([key, value]) => {
        return (
          <div className="workout-sets-repetitions__stats">
            <h1 className="workout-sets-repetitions__stats-number">{value}</h1>
            <h6 className="workout-sets-repetitions__stats-stat">{key}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutExerciseStats;
