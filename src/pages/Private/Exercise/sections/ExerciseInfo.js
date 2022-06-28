import React from "react";
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";

const ExerciseInfo = React.memo(({ stats }) => {
  const exercise = JSON.parse(localStorage.getItem("exercise"));

  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center mb-3">
            <h1>{exercise.name}</h1>
          </div>
          <div className="d-flex flex-row row">
            <div className="col-5 d-flex justify-content-end">
              <h3>{exercise.type}</h3>
            </div>
            <div className="col-2 d-flex justify-content-center">
              <h3>|</h3>
            </div>
            <div className="col-5 d-flex justify-content-start">
              <h3>{exercise.area}</h3>
            </div>
            <div className="mt-3 grid-3-item">
              {Object.keys(stats).map((key) => (
                <StatsCard key={key} data={stats[key]} title={key} />
              ))}
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
});

export default ExerciseInfo;
