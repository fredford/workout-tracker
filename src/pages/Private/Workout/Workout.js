import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Page from "../../../components/Misc/Page";
import { resolve } from "../../../services/utils";
import WorkoutsService from "../../../services/workouts";
import ExercisesService from "../../../services/exercises";
import SetsService from "../../../services/sets";
import WorkoutService from "../../../services/workout";
import SectionAddSet from "./sections/SectionAddSet";
import { useDispatch, useSelector } from "react-redux";
import { setExercises } from "../../../redux/reducers/exercises";
import Form from "../../../components/Forms/Form";
import { FaPlus, FaMinus, FaWindowClose } from "react-icons/fa";

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
  }, [JSON.stringify(sets)]);

  const retrieveData = async () => {
    const [dataWorkout, errorWorkout] = await resolve(
      WorkoutsService.getById(workoutId)
    );
    const [dataSets, errorSets] = await resolve(
      WorkoutService.getAll(workoutId)
    );
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

    if (outputAmount === "" || outputIndex !== index) {
      setOutputAmount(1);
    } else {
      setOutputAmount(++amount);
    }
    setOutputIndex(Number(index));
  };

  const decreaseAmount = (index) => {
    let amount = outputAmount;

    if (outputAmount === "" || outputIndex !== index || outputAmount === 1) {
      setOutputAmount("");
    } else if (outputAmount > 1) {
      setOutputAmount(--amount);
    }

    setOutputIndex(Number(index));
  };

  const updateAmount = (e) => {
    var index = Number(e.target.id);
    setOutputIndex(index);

    var value = Number(e.target.value);

    if (e.target.value > 0) {
      setOutputAmount(Number(e.target.value));
    } else if (e.target.value === "" || value === 0) {
      setOutputAmount("");
    }
  };

  const addSet = async (index, item) => {
    if (index === outputIndex) {
      const exercise = exercises.find((element) => element.name === item);

      var newSet = {};
      newSet["exerciseId"] = exercise._id;
      newSet["workoutId"] = workoutId;
      newSet["amount"] = outputAmount;

      const [data, error] = await resolve(SetsService.createSet(newSet));

      var newSets = [...sets];
      if (data) {
        newSets.push(data);
      }

      setSets(newSets);
    }
  };

  const deleteSet = async (item, index2) => {
    const set = exercisesInSetsObject[item][index2];

    const [data, error] = await resolve(SetsService.removeSet(set._id));

    var newSets = sets.filter((s) => s._id !== set._id);

    setSets(newSets);
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
      <Page.Header navbar container>
        {date}
      </Page.Header>
      <Page.Body container>
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

              const sumSets = array.reduce((n, { amount }) => {
                return Number(amount) + n;
              }, 0);

              const avgSets = Math.round((sumSets / array.length) * 10) / 10;

              const maxSet = Math.max(...array.map((o) => Number(o.amount)), 0);

              if (outputIndex === index) {
                value = outputAmount;
              }

              return (
                <div key={index} className="card d-flex flex-row mb-3">
                  <div className="p-3 d-flex flex-column justify-contents-center align-items-center">
                    <h4 className="mb-2">{item}</h4>
                    <h6>Total: {sumSets}</h6>
                    <h6>Avg: {avgSets}</h6>
                    <h6>Max: {maxSet}</h6>
                  </div>

                  <div className="p-3">
                    {React.Children.toArray(
                      array.map((set, index2) => {
                        return (
                          <div
                            key={index2}
                            className="d-flex flex-row set align-items-center"
                          >
                            <h5 className="me-3">Set {index2 + 1}</h5>
                            <h5>{set.amount}</h5>
                            <button
                              className="btn set-button"
                              onClick={() => deleteSet(item, index2)}
                            >
                              <FaWindowClose />
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <Button onClick={() => increaseAmount(index)}>
                      <Button.Icon>
                        <FaPlus />
                      </Button.Icon>
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
                      <Button.Icon>
                        <FaMinus />
                      </Button.Icon>
                    </Button>
                  </div>
                  <div className="d-flex align-items-center p-3">
                    <Button onClick={() => addSet(index, item)}>
                      <Button.Text>Add</Button.Text>
                    </Button>
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
