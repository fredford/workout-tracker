import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import ListExercises from "../components/exercises/ListExercises";

import { ActivityProvider } from "../contexts/activityContext";

import { Container } from "react-bootstrap";

import Page from "./Page/Page";

import Card from "../components/cards/Card";

import ExerciseService from "../services/exercises";

import { resolve } from "../services/utils";

import { setExercises } from "../redux/reducers/exercises";

export default function Exercises() {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExerciseService.getAll());
    console.log(data);
    dispatch(setExercises(data));
  };

  const retrieveUserExercises = async () => {
    const [data, error] = await resolve(ExerciseService.getUser());
    dispatch(setExercises(data));
  };

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
