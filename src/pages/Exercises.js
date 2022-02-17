import React, { useEffect, useState } from "react";

import ListExercises from "../components/exercises/ListExercises";

import Page from "./Page/Page";

import Card from "../components/cards/Card";

import ExerciseService from "../services/exercises";

import { resolve } from "../services/utils";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExerciseService.get("all"));
    setExercises(data);
  };

  const retrieveUserExercises = async () => {
    const [data, error] = await resolve(ExerciseService.get("user"));
    setExercises(data);
  };

  return (
    <Page title="Exercises">
      <Card className="bg-pink">
        {React.Children.toArray(
          exercises.map((exercise) => <p>{exercise.name}</p>)
        )}
      </Card>

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
