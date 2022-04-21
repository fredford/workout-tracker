import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { selectExerciseById } from "../../../redux/reducers/exercises";
import { resolve } from "../../../services/utils";
import ExerciseInfo from "./sections/ExerciseInfo";

const Exercise = () => {
  let { exerciseId } = useParams();

  const exercise = useSelector((state) =>
    selectExerciseById(state, exerciseId)
  );

  useEffect(() => {});

  const retrieveExercise = async () => {};

  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-page container">
        <ExerciseInfo />
      </Page.Body>
    </Page>
  );
};

export default Exercise;
