import React from "react";

import Page from "../../../components/Layout/Page/Page";
import PageHeader from "../../../components/Layout/Page/PageHeader";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";

/**
 * Page component that displays Workouts you can start and a history of previous Workouts started
 */
const Workouts = () => {
  return (
    <Page navbar container>
      <PageHeader header="Workouts" />
      <SectionAddWorkout />
      <SectionWorkouts />
    </Page>
  );
};

export default Workouts;
