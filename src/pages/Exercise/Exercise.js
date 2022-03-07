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

  console.log(exercise);

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
          <Card>
            <h4>Stats</h4>
          </Card>
        </div>
      </div>
    </Page>
  );
};

export default Exercise;
