import React from "react";
import { Container } from "react-bootstrap";

import ListExercises from "../components/exercises/ListExercises";
import Page from "../components/layouts/Page";
import { ActivityProvider } from "../contexts/activityContext";

export default function Exercises() {
  return (
    <Page title="Exercises">
      <ActivityProvider>
        <Container>
          <ListExercises />
        </Container>
      </ActivityProvider>
    </Page>
  );
}
