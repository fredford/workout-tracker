import React from "react";

import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";
import StatsListExercises from "../../../components/Stats/StatsListExercises";

/**
 * Page component that displays Workouts you can start and a history of previous Workouts started
 */
const Workouts = () => {
  return (
    <Page navbar container>
      <PageHeader header="Workouts" />
      <div className="workouts-row">
        <div className="workouts-col">
          <SectionAddWorkout />
          <SectionWorkouts />
        </div>
        <div className=""></div>
      </div>
    </Page>
  );
};

export default Workouts;
