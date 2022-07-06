import React from "react";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import Section from "../../../components/Misc/Section";
import StatsCard from "../../../components/Stats/StatsCard";
import StatsBarChart from "../../../components/Stats/StatsBarChart";

import SectionAddWorkout from "../Workouts/sections/SectionAddWorkout";

const Dashboard = () => {
  const stats = {
    Upper: 40,
    Lower: 60,
    Core: 90,
    Cardio: 80,
  };

  const dataCumulative = {
    labels: Object.keys(stats),
    datasets: [
      {
        label: "Cumulative Reps",
        data: Object.values(stats),
        backgroundColor: "slategrey",
        borderColor: "skyblue",
        fill: false,
      },
    ],
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Body navbar>
        <div className="grid-150">
          <StatsCard
            className="stats-border"
            data={"Push-ups"}
            title="Best Exercise"
          />
          <StatsCard className="stats-border" data={500} title="Best Workout" />
          <StatsCard className="stats-border" data={250} title="Last Workout" />
          <StatsCard className="stats-border" data={5000} title="Total Reps" />
        </div>

        <Card className="mt-3">
          <Card.Header>Areas</Card.Header>
          <Card.Body className="mt-3">
            <StatsBarChart data={dataCumulative} options="standard" show />
          </Card.Body>
        </Card>
        <Card className="mt-3">
          <Card.Header>Top Exercises</Card.Header>
          <Card.Body className="mt-3"></Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Dashboard;
