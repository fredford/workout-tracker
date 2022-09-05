import React from "react";
import BasicCard from "../../../../components/Cards/BasicCard";

/**
 * Component to display the current goals in progress.
 *
 * Status: in-progress, not in use.
 *
 * TODO: This component needs a workflow to be setup for adding goals for users
 * general goals like Total Reps or Total Steps
 */
const Goals = () => {
  const goalsList = [
    { name: "Total Repetitions", current: 10000, goal: 200000 },
    { name: "Total Steps", current: 120000, goal: 300000 },
    { name: "Total Distance", current: 20000, goal: 20000 },
  ];
  return (
    <BasicCard className="dashboard__goals" title="Goals">
      <div>
        {goalsList.map((goal, index) => {
          let styleWidth = `${Math.round((goal.current / goal.goal) * 100)}%`;

          let className = "progress dashboard__goals-progress";

          className += styleWidth === "100%" ? " active" : "";

          return (
            <div className="dashboard__goal" key={index}>
              <h5 className="text-muted">{goal.name}</h5>

              <div className={className}>
                <div className="dashboard__goals-stats">
                  <p>
                    {goal.current}/{goal.goal}
                  </p>
                </div>

                <div
                  className="progress-bar dashboard__goals-progress-bar"
                  style={{ width: styleWidth }}
                  role="progressbar"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </BasicCard>
  );
};

export default Goals;
