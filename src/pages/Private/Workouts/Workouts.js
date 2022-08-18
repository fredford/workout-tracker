import React from "react";

import Page from "../../../components/Misc/Page";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";
import SectionTesting from "./sections/SectionTesting";

/**
 * Page component that displays Workouts you can start and a history of previous Workouts started
 */
const Workouts = () => {
  return (
    <Page navbar container>
      <Page.Header header="Workouts" />
      <Page.Body className="grid-margin">
        <SectionAddWorkout />
        <SectionWorkouts />
        <SectionTesting />
      </Page.Body>
    </Page>
  );
};

export default Workouts;
