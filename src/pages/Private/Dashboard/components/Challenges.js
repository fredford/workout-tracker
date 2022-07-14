import React from "react";
import Card from "../../../../components/Cards/Card";

const Challenges = () => {
  const challengesList = [
    { name: "3000 Push-ups", current: 1000, goal: 3000 },
    { name: "10000 Squats", current: 900, goal: 10000 },
  ];
  return (
    <Card className="dashboard__goals">
      <Card.Header className="mb-3">Challenges</Card.Header>
      <Card.Body>
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
      </Card.Body>
    </Card>
  );
};

export default Challenges;
