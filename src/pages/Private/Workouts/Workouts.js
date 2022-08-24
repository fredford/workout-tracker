import React, { useEffect, useState } from "react";

import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";
import StatsListExercises from "../../../components/Stats/StatsListExercises";

// Local services
import services from "../../../services/services";

/**
 * Page component that displays Workouts you can start and a history of previous Workouts started
 */
const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Function to retrieve User Workouts from the server
    const retrieveAllWorkouts = async () => {
      await services.workouts.getAll(setWorkouts);
      setStats(workouts.sort((a, b) => b.Reps - a.Reps));
    };

    retrieveAllWorkouts();
  }, [JSON.stringify(workouts)]);

  return (
    <Page navbar container>
      <PageHeader header="Workouts" />
      <div className="workouts-row">
        <div className="workouts-col">
          <SectionAddWorkout />
          <SectionWorkouts workouts={workouts} />
        </div>
        <div className="">
          <StatsListExercises stats={stats} path="workouts" />
        </div>
      </div>
    </Page>
  );
};

export default Workouts;
