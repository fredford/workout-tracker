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
import { FaPlus, FaMinus } from "react-icons/fa";

import Section from "../../../components/Misc/Section";

import Button from "../../../components/Buttons/Button";

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
  }, [sets]);

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
  const [outputIndex, setOutputIndex] = useState("");

  const increaseAmount = (index) => {
    let amount = outputAmount;

    console.log(outputAmount);
    if (outputAmount === "" || outputIndex !== index) {
      setOutputAmount(1);
    } else {
      setOutputAmount(++amount);
    }
    setOutputIndex(Number(index));
  };

  const decreaseAmount = (index) => {
    let amount = outputAmount;

    if (outputAmount === "" || outputIndex !== index) {
      setOutputAmount(1);
    } else {
      setOutputAmount(--amount);
    }

    setOutputIndex(Number(index));
  };

  const updateAmount = (e) => {
    if (e.target.value > 1) {
      setOutputAmount(Number(e.target.value));
      setOutputIndex(Number(e.target.id));
    }
  };

  const addSet = async (index, item) => {
    console.log(index, outputIndex, item);
    if (index === outputIndex) {
      const exercise = exercises.find((element) => element.name === item);

      console.log(exercise);
      var newSet = {};
      newSet["exerciseId"] = exercise._id;
      newSet["amount"] = outputAmount;

      const [data, error] = await resolve(
        SetsService.createSet(workoutId, newSet)
      );

      var newSets = [...sets];
      if (data) {
        newSets.push(data);
      }

      setSets(newSets);
    }
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
        <Section>
          <Section.Header>Exercises</Section.Header>
          <Section.Body>
            {Object.keys(exercisesInSetsObject).map((item, index) => {
              let array = exercisesInSetsObject[item];
              var value = "";

              if (outputIndex === index) {
                value = outputAmount;
              }

              return (
                <div key={index} className="card d-flex flex-row mb-3">
                  <div className="p-3 d-flex justify-contents-center align-items-center">
                    <h4>{item}</h4>
                  </div>

                  <div className="p-3">
                    {React.Children.toArray(
                      array.map((set, index2) => {
                        return (
                          <div key={index2} className="d-flex flex-row">
                            <h5 className="me-3">Set {index2 + 1}</h5>
                            <h5>{set.amount}</h5>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <Button onClick={() => increaseAmount(index)}>
                      <FaPlus />
                    </Button>
                  </div>

                  <form className="d-flex align-items-center">
                    <input
                      id={index}
                      value={value}
                      onChange={(e) => updateAmount(e)}
                    />
                  </form>
                  <div className="d-flex align-items-center p-3">
                    <Button onClick={() => decreaseAmount(index)}>
                      <FaMinus />
                    </Button>
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <Button onClick={() => addSet(index, item)}>Add</Button>
                  </div>
                </div>
              );
            })}
          </Section.Body>
        </Section>
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
