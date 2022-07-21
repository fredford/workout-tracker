import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";
import WorkoutsService from "../../../../services/workouts";
import { resolve } from "../../../../services/utils";

const LastWorkout = () => {
  const navigate = useNavigate();

  const [lastWorkout, setLastWorkout] = useState({
    id: "123456",
    type: "Progressive",
    sets: 0,
    totalRepetitions: 0,
  });

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [data, error] = await resolve(WorkoutsService.getLast());

    // Set the last workout as the data received or log the error
    data ? setLastWorkout(data) : console.log(error);
  };

  return (
    <Card
      className="dashboard__last-workout"
      onClick={() => navigate(`/workouts/${lastWorkout.id}`)}
    >
      <Card.Header>Last Workout</Card.Header>
      <Card.Subtitle className="text-muted">{lastWorkout.type}</Card.Subtitle>
      <Card.Body>
        <div className="grid-2-item">
          <StatsCard data={lastWorkout.sets} title="Sets" subtitle="Count" />
          <StatsCard
            data={lastWorkout.totalRepetitions}
            title="Total"
            subtitle="Repetitions"
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default LastWorkout;
