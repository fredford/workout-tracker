import React from "react";

import Page from "../../../components/Misc/Page";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";

const Workouts = () => {
  return (
    <Page navbar container>
      <Page.Header header="Workouts" />
      <Page.Body className="grid-margin">
        <SectionAddWorkout />
        <SectionWorkouts />
      </Page.Body>
    </Page>
  );
};

export default Workouts;
