import React from "react";
import BasicCard from "../../../../components/Cards/BasicCard";

/**
 * Component to display the current challenges in progress.
 *
 * Status: in-progress, not in use.
 *
 * TODO: This component needs a workflow to be setup for adding challenges for exercises.
 */
const Challenges = () => {
  const challengesList = [
    { name: "3000 Push-ups", current: 1000, goal: 3000 },
    { name: "10000 Squats", current: 900, goal: 10000 },
  ];
  return (
    <BasicCard className="dashboard__goals" title="Challenges">
      <div>
        {challengesList.map((goal, index) => {
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

export default Challenges;
