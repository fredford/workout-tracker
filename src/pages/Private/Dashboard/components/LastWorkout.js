import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import StatsCard from "../../../../components/Stats/StatsCard";

const LastWorkout = () => {
  const navigate = useNavigate();

  const lastWorkoutInfo = {
    id: "123456",
    type: "Progressive",
    sets: 15,
    topExercise: "Push-ups",
    totalRepetitions: 120,
    primaryArea: "Upper",
  };

  return (
    <Card
      className="dashboard__last-workout"
      onClick={() => navigate(`/workouts/${lastWorkoutInfo.id}`)}
    >
      <Card.Header>Last Workout</Card.Header>
      <Card.Subtitle className="text-muted">
        {lastWorkoutInfo.type}
      </Card.Subtitle>
      <Card.Body>
        <div className="grid-2-item">
          <StatsCard
            data={lastWorkoutInfo.sets}
            title="Sets"
            subtitle="Count"
          />
          <StatsCard
            data={lastWorkoutInfo.totalRepetitions}
            title="Total"
            subtitle="Repetitions"
          />
          {/*
          <StatsCard
            data={lastWorkoutInfo.topExercise}
            title="Top"
            subtitle="Exercise"
          />
          <StatsCard
            data={lastWorkoutInfo.primaryArea}
            title="Primary"
            subtitle="Area"
          />
  */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default LastWorkout;
