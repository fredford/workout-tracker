import React from "react";
import { Container } from "react-bootstrap";

import ListExercises from "../components/exercises/ListExercises";
import Page from "../components/layouts/Page/Page";
import { ActivityProvider } from "../contexts/activityContext";

import StandardCard from "../components/cards/StandardCard";

export default function Exercises() {
  return (
    <Page title="Exercises">
      <StandardCard></StandardCard>
      {/*
      <ActivityProvider>
        <Container>
          <ListExercises />
        </Container>
      </ActivityProvider>
    */}
    </Page>
  );
}
