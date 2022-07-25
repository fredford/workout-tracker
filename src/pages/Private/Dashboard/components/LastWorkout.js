// Library imports
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Local component imports
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";
import WorkoutsService from "../../../../services/workouts";

// Utilities
import useApi from "../../../../services/useApi";

/**
 * Component that retrieves the Last Workout performed
 *
 * Status: complete
 */
const LastWorkout = () => {
  // React hooks
  const navigate = useNavigate();

  // Component State
  const [link, setLink] = useState("/workouts");
  const [lastWorkout, setLastWorkout] = useState({
    id: "123456",
    type: "Progressive",
    sets: 0,
    totalRepetitions: 0,
  });

  // API GET call for the Last Workout
  const { loading, data, error } = useApi(WorkoutsService.getLast);

  // Handle data retrieved for the component state
  useEffect(() => {
    // Set the data for the last workout
    if (data) {
      setLastWorkout(data);
      setLink(`/workouts/${data.id}`);
    }
  }, [data, error]);

  return (
    <Card className="dashboard__last-workout" onClick={() => navigate(link)}>
      {error ? (
        <Card.Body>
          <div className="d-flex justify-content-center align-items-center h-100">
            <h3>Start Workout</h3>
          </div>
        </Card.Body>
      ) : (
        <Fragment>
          <Card.Header>Last Workout</Card.Header>
          <Card.Subtitle className="text-muted">
            {lastWorkout.type}
          </Card.Subtitle>
          <Card.Body>
            <div className="grid-2-item">
              <StatsCard
                data={lastWorkout.sets}
                title="Sets"
                subtitle="Count"
              />
              <StatsCard
                data={lastWorkout.totalRepetitions}
                title="Total"
                subtitle="Repetitions"
              />
            </div>
          </Card.Body>
        </Fragment>
      )}
    </Card>
  );
};

export default LastWorkout;
