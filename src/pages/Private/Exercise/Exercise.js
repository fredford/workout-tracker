import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { selectExerciseById } from "../../../redux/reducers/exercises";
import { resolve } from "../../../services/utils";
import ExerciseInfo from "./sections/ExerciseInfo";
import ButtonLink from "../../../components/Buttons/ButtonLink";

const Exercise = () => {
  let { exerciseId } = useParams();

  const exercise = useSelector((state) =>
    selectExerciseById(state, exerciseId)
  );

  if (exercise) {
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }

  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-page">
        <div className="mb-3">
          <ExerciseInfo />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Stats</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Challenges</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Last 30 Days</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>

            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Set Progression</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Workout Progression</Card.Header>
                <Card.Body></Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <ButtonLink path="/exercises" className="w-100 m-3">
            <ButtonLink.Text>Back to Exercises</ButtonLink.Text>
          </ButtonLink>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Exercise;
