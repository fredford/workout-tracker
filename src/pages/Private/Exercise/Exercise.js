import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { selectExerciseById } from "../../../redux/reducers/exercises";
import ExerciseInfo from "./sections/ExerciseInfo";
import Button from "../../../components/Buttons/Button";
import { resolve } from "../../../services/utils";
import { useNavigate } from "react-router-dom";

import ExercisesServices from "../../../services/exercises";

const Exercise = () => {
  const navigate = useNavigate();
  // TODO fill in cards and separate into component files

  let { exerciseId } = useParams();

  const exercise = useSelector((state) =>
    selectExerciseById(state, exerciseId)
  );

  const user = useSelector((state) => state.user);

  if (exercise) {
    localStorage.setItem("exercise", JSON.stringify(exercise));
  }

  const deleteExercise = async () => {
    const [data, error] = await resolve(
      ExercisesServices.deleteExercise(user._id, exerciseId)
    );

    if (data) {
      navigate("/message/exercisedeletesuccess");
    } else {
      navigate("/message/exercisedeletefailed");
    }
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Body navbar>
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
            <div className="col-6 card-margin">
              <Card>
                <Card.Header>Settings</Card.Header>
                <Card.Body>
                  <Button onClick={deleteExercise} className="w-100 btn-danger">
                    <Button.Text>Delete</Button.Text>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <Button path="/exercises" className="w-100">
            <Button.Text>Back to Exercises</Button.Text>
          </Button>
        </div>
      </Page.Body>
    </Page>
  );
};

export default Exercise;
