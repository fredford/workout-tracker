import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Card from "../../components/cards/Card";

import ExercisesServices from "../../services/exercises";
import { resolve } from "../../services/utils";
import Page from "../Page/Page";
import ExerciseTitle from "./components/ExerciseTitle";

const Exercise = () => {
  let { exerciseId } = useParams();
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    getExercise();
  }, []);

  const getExercise = async () => {
    const [data, error] = await resolve(ExercisesServices.getById(exerciseId));
    setExercise(data[0]);
  };

  return (
    <Page>
      <div className="row">
        <div className="col-12">
          <ExerciseTitle exercise={exercise} />
        </div>
        <div className="col-sm-6">
          <Card className="m-3 mt-0">
            <h4>Stats</h4>
          </Card>
        </div>
        <div className="col-sm-6">
          <Card className="m-3 mt-0">
            <h4>Challenges</h4>
          </Card>
        </div>
        <div className="col-sm-6">
          <Card className="m-3 mt-0">
            <h4>Last 30 Days</h4>
          </Card>
        </div>
        <div className="col-sm-6">
          <Card className="m-3 mt-0">
            <h4>Set Progression</h4>
          </Card>
        </div>
        <div className="col-sm-6">
          <Card className="m-3 mt-0">
            <h4>Workout Progression</h4>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Exercise;
