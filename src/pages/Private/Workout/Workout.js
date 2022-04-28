import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import WorkoutsService from "../../../services/workouts";
import ExercisesService from "../../../services/exercises";
import SetsService from "../../../services/sets";
import SectionAddSet from "./sections/SectionAddSet";
import { useDispatch, useSelector } from "react-redux";
import { setExercises } from "../../../redux/reducers/exercises";
import Form from "../../../components/Forms/Form";

const Workout = () => {
  const dispatch = useDispatch();

  const { workoutId } = useParams();
  const [workout, setWorkout] = useState({
    date: "...",
    type: "...",
  });
  const [date, setDate] = useState("");

  const changeNewExercise = (exercise) => {
    setNewExercise(exercise);
  };

  const [sets, setSets] = useState([]);

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    const [dataWorkout, errorWorkout] = await resolve(
      WorkoutsService.getById(workoutId)
    );
    const [dataSets, errorSets] = await resolve(SetsService.getAll(workoutId));
    setWorkout(dataWorkout[0]);

    //const [dataExercises, errorExercises] = await resolve(
    //  ExercisesService.getAll()
    //);

    //dispatch(setExercises(dataExercises));
    //setExerciseList(dataExercises);

    setSets(dataSets);
    let tempDate = new Date(dataWorkout[0].date);
    setDate(tempDate.toDateString());
  };

  const [outputExercise, setOutputExercise] = useState("");
  const [outputAmount, setOutputAmount] = useState("");

  const updateOutput = (e) => {
    setOutputAmount(e);
  };

  // ----------------------------
  // Variable for the new exercise selected
  const [newExercise, setNewExercise] = useState("");
  // List of all exercises
  const exercises = useSelector((state) => state.exercises.exercises);
  // Set the list of available exercises
  var availableExercises = [...exercises];
  // Set the list of exercises in progress
  var workoutExercises = [];
  // Set the list of set exercises to be shown
  var exercisesInSetsArray = [];

  var exercisesInSetsObject = {};

  if (newExercise !== "") {
    exercisesInSetsObject[newExercise.name] = [];
  }

  if (sets.length > 0) {
    exercisesInSetsObject = Object.assign(
      exercisesInSetsObject,
      groupBy(sets, "name")
    );

    for (const [key, value] of Object.entries(exercisesInSetsObject)) {
      let obj = {};
      obj[key] = value;

      workoutExercises.push(key);

      exercisesInSetsArray.push(obj);
    }
  }

  availableExercises = availableExercises.filter(
    (exercise) => !workoutExercises.includes(exercise.name)
  );

  // -----------------------------

  return (
    <Page>
      <Page.NavBar />
      <Page.Header>{date}</Page.Header>
      <Page.Body className="navbar-page container">
        <SectionAddSet
          exercises={availableExercises}
          newExercise={newExercise}
          setNewExercise={changeNewExercise}
        />
        <Card>
          <Card.Body>
            {Object.keys(exercisesInSetsObject).map((item, index) => {
              let array = exercisesInSetsObject[item];

              return (
                <div key={index} className="card d-flex flex-row">
                  <h4>{item}</h4>
                  <div className="">
                    {React.Children.toArray(
                      array.map((set, index2) => {
                        return (
                          <div key={index2} className="">
                            <h5>{set.amount}</h5>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <Form>
                    <Form.Input value={outputAmount} onChange={updateOutput} />
                  </Form>
                  <button>Add</button>
                </div>
              );
            })}
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x.exercise[key]] = rv[x.exercise[key]] || []).push(x);
    return rv;
  }, {});
};

export default Workout;
