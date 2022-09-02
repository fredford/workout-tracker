import React from "react";

import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";

import { nFormatter } from "../../../../../utilities/utils";

const ChartLifeTimeGoals = ({ stats }) => {
  let primaryColor = getComputedStyle(document.body).getPropertyValue("--foreground-prim");

  let accentColor = getComputedStyle(document.body).getPropertyValue("--foreground-acce");

  let primaryBgColor = getComputedStyle(document.body).getPropertyValue("--background-prim");

  let accentBgColor = getComputedStyle(document.body).getPropertyValue("--background-acce");

  let goalReps = stats.reps?.goal ?? "40000";
  let goalSteps = stats.steps?.goal ?? "2000000";
  let currReps = stats.reps?.current ?? "0";
  let currSteps = stats.steps?.current ?? "0";

  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-3 mb-3">
      <div className="dashboard__lifetime-chart">
        <CircularProgressbarWithChildren
          value={(currReps / goalReps) * 100}
          strokeWidth={8}
          styles={buildStyles({
            pathColor: primaryColor,
            trailColor: primaryBgColor,
          })}
        >
          <div style={{ width: "84%" }}>
            <CircularProgressbarWithChildren
              value={(currSteps / goalSteps) * 100}
              styles={buildStyles({
                pathColor: accentColor,
                trailColor: accentBgColor,
              })}
            >
              <h4 className="text-normal">Lifetime</h4>
              <h5 style={{ color: primaryColor }}>Reps</h5>
              <h4 style={{ color: primaryColor, fontSize: 14 }}>
                {nFormatter(currReps, 4)}/{nFormatter(goalReps, 4)}
              </h4>
              <h5 style={{ color: accentColor }}>Steps</h5>
              <h4 style={{ color: accentColor, fontSize: 14 }}>
                {nFormatter(currSteps, 4)}/{nFormatter(goalSteps, 4)}
              </h4>
            </CircularProgressbarWithChildren>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ChartLifeTimeGoals;
