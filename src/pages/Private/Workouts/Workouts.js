import React from "react";

import Page from "../../../components/Misc/Page";
import SectionWorkouts from "./sections/SectionWorkouts";
import SectionAddWorkout from "./sections/SectionAddWorkout";

const Workouts = () => {
  return (
    <Page>
      <Page.NavBar />
      <Page.Header navbar container>
        Workouts
      </Page.Header>
      <Page.Body container>
        <SectionAddWorkout />
        <SectionWorkouts />
      </Page.Body>
    </Page>
  );
};

export default Workouts;
