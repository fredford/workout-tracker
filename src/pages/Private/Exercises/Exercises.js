import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Page from "../../../components/Misc/Page";
import SectionExercises from "./sections/SectionExercises";

import ExercisesService from "../../../services/exercises";
import { resolve } from "../../../services/utils";
import { setExercises } from "../../../redux/reducers/exercises";

const Exercises = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  });

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExercisesService.getAll());
    dispatch(setExercises(data));
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-page container">
        <SectionExercises />
      </Page.Body>
    </Page>
  );
};

export default Exercises;
