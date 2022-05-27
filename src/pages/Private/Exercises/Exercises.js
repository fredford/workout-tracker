import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "../../../components/Misc/Page";
import SectionExercises from "./sections/SectionExercises";

import { ActivityProvider } from "../../../contexts/activityContext";

import ExercisesService from "../../../services/exercises";
import { resolve } from "../../../services/utils";
import { setExercises } from "../../../redux/reducers/exercises";

const Exercises = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExercisesService.getAll());
    dispatch(setExercises(data));
  };

  return (
    <ActivityProvider>
      <Page>
        <Page.NavBar />
        <Page.Header navbar container header="Exercises" />
        <Page.Body container>
          <SectionExercises />
        </Page.Body>
      </Page>
    </ActivityProvider>
  );
};

export default Exercises;
