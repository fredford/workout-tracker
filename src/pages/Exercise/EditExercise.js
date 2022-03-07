import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../components/cards/Card";
import Page from "../Page/Page";

import { addExercise } from "../../redux/reducers/exercises";
import ExercisesServices from "../../services/exercises";
import { resolve, secondsToDuration } from "../../services/utils";

const EditExercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  let { exerciseId } = useParams();
  const [exercise, setExercise] = useState({});

  const [name, setName] = useState("");
  const [newArea, setNewArea] = useState("");
  const [newType, setNewType] = useState("");
  const [goalPerSet, setGoalPerSet] = useState("");
  const [goalPerWorkout, setGoalPerWorkout] = useState("");
  const [goalPerSetDuration, setGoalPerSetDuration] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
  });
  const [goalPerWorkoutDuration, setGoalPerWorkoutDuration] = useState({
    hh: 0,
    mm: 0,
    ss: 0,
  });

  useEffect(() => {
    getExercise();
  }, []);

  const getExercise = async () => {
    const [data, error] = await resolve(ExercisesServices.getById(exerciseId));

    setName(data[0].name);
    setNewArea(data[0].area);
    setNewType(data[0].type);

    if (data[0].type === "Repetitions") {
      setGoalPerSet(data[0].goalPerSet);
      setGoalPerWorkout(data[0].goalPerWorkout);
    } else if (data[0].type === "Duration") {
      var { hours, minutes, seconds } = secondsToDuration(data[0].goalPerSet);
    }
    setExercise(data[0]);
  };

  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  var errorName = "";

  var createDisabled = true;

  // Check that all fields have been filled out
  if (name.length !== 0 && newArea.length !== 0 && newType.length !== 0) {
    if (
      newType === "Repetitions" &&
      goalPerSet.length !== 0 &&
      goalPerWorkout.length !== 0
    ) {
      createDisabled = false;
    } else if (
      newType === "Duration" &&
      !Object.values(goalPerSetDuration).every((k) => k === "00") &&
      !Object.values(goalPerWorkoutDuration).every((k) => k === "00")
    ) {
      createDisabled = false;
    }
  }
  // Check if the name already exists in the system
  if (exercises.some((obj) => obj.name === name)) {
    console.log(name);

    createDisabled = false;
    errorName = "Exercise name already exists";
  }

  const clearGoals = () => {
    setGoalPerSet("");
    setGoalPerWorkout("");
    setGoalPerSetDuration({
      hh: "00",
      mm: "00",
      ss: "00",
    });
    setGoalPerWorkoutDuration({
      hh: "00",
      mm: "00",
      ss: "00",
    });
  };

  const updateGoal = (e) => {
    var newSetTime = Object.assign({}, goalPerSetDuration);
    var newWorkoutTime = Object.assign({}, goalPerWorkoutDuration);
    var value = e.target.value;
    if (e.target.value.length === 1) {
      value = "0" + value;
    }

    if (value < 0) {
      return;
    }

    switch (e.target.name) {
      case "gps-hh":
        newSetTime.hh = e.target.value;
        setGoalPerSetDuration(newSetTime);
        break;
      case "gps-mm":
        newSetTime.mm = e.target.value;
        setGoalPerSetDuration(newSetTime);
        break;
      case "gps-ss":
        newSetTime.ss = e.target.value;
        setGoalPerSetDuration(newSetTime);
        break;
      case "gpw-hh":
        newWorkoutTime.hh = e.target.value;
        setGoalPerWorkoutDuration(newWorkoutTime);
        break;
      case "gpw-mm":
        newWorkoutTime.mm = e.target.value;
        setGoalPerWorkoutDuration(newWorkoutTime);
        break;
      case "gpw-ss":
        newWorkoutTime.ss = e.target.value;
        setGoalPerWorkoutDuration(newWorkoutTime);
        break;
      default:
        console.log("Error");
    }
  };

  const createExercise = async () => {
    let timeInSecondsSet =
      parseInt(goalPerSetDuration.ss) +
      parseInt(goalPerSetDuration.mm) * 60 +
      parseInt(goalPerSetDuration.hh) * 3600;

    let timeInSecondsWorkout =
      parseInt(goalPerWorkoutDuration.ss) +
      parseInt(goalPerWorkoutDuration.mm) * 60 +
      parseInt(goalPerWorkoutDuration.hh) * 3600;

    if (newType === "Duration") {
    }

    var newExercise = {
      name,
      area: newArea,
      type: newType,
      goalPerSet: newType === "Repetitions" ? goalPerSet : timeInSecondsSet,
      goalPerWorkout:
        newType === "Repetition" ? goalPerWorkout : timeInSecondsWorkout,
      user: user._id,
    };
    try {
      await dispatch(addExercise(newExercise));
      navigate("/message/exerciseadded");
    } catch (err) {
      navigate("/message/exercisefailed");
      console.log(err);
    }
  };

  return (
    <Page>
      <div className="add-exercise">
        <h1 className="add-exercise__title">Edit Exercise</h1>
        <Card>
          <div className="add-exercise__input">
            <h5 className="mb-1">Name</h5>
            <h6 className="text-muted">The name of the exercise</h6>
            <input
              className="default-input w-100"
              type="text"
              value={name}
              placeholder="Enter new name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="mt-1 text-danger">{errorName}</p>
          </div>
          <div className="add-exercise__input">
            <h5 className="mb-1">Area</h5>
            <h6 className="text-muted mb-3">
              The general area of the body being worked
            </h6>
            <div className="add-exercise__area-container">
              {React.Children.toArray(
                areas.map((area) => {
                  return (
                    <label className="add-exercise__area">
                      <input
                        type="radio"
                        name="Area"
                        value={area}
                        checked={area === newArea}
                        onChange={(e) => setNewArea(e.target.value)}
                      />

                      <img
                        className="add-exercise__image"
                        id={`${area.toLowerCase()}-image`}
                        alt=""
                      />
                      <label>{area}</label>
                    </label>
                  );
                })
              )}
            </div>
          </div>
          <div className="add-exercise__input">
            <h5 className="mb-1">Type</h5>
            <h6 className="text-muted mb-3">
              The way the exercise is quantified
            </h6>
            <div className="add-exercise__area-container">
              {React.Children.toArray(
                types.map((type) => {
                  return (
                    <label className="add-exercise__area">
                      <input
                        type="radio"
                        name="Type"
                        value={type}
                        checked={type === newType}
                        onChange={(e) => {
                          setNewType(e.target.value);
                          clearGoals();
                        }}
                      />

                      <img
                        className="add-exercise__image"
                        id={`${type.toLowerCase()}-image`}
                        alt=""
                      />
                      <label>{type}</label>
                    </label>
                  );
                })
              )}
            </div>
          </div>
          <div className="add-exercise__input">
            <h5 className="mb-1">Goals</h5>
            <h6 className="mb-3 text-muted">
              The number of repetitions or duration that you're aiming for
            </h6>
            <div className="row">
              <div className="col-4">
                <p className="pt-2 text-end">Goal Per Set</p>
              </div>

              <div className="col-8">
                {newType === "Repetitions" || newType === "" ? (
                  <input
                    className="default-input add-exercise__goal-input"
                    disabled={newType.length === 0}
                    placeholder="Goal Per Set"
                    value={goalPerSet}
                    type="number"
                    onChange={(e) => setGoalPerSet(e.target.value)}
                  />
                ) : (
                  <div className="d-flex flex-row">
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="HH"
                      type="number"
                      name="gps-hh"
                      value={goalPerSetDuration.hh}
                      onChange={updateGoal}
                    />

                    <p className="pt-2">:</p>
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="MM"
                      type="number"
                      name="gps-mm"
                      value={goalPerSetDuration.mm}
                      onChange={updateGoal}
                    />

                    <p className="pt-2">:</p>
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="SS"
                      type="number"
                      name="gps-ss"
                      value={goalPerSetDuration.ss}
                      onChange={updateGoal}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p className="pt-2 text-end">Goal Per Workout</p>
              </div>
              <div className="col-8">
                {newType === "Repetitions" || newType === "" ? (
                  <input
                    className="default-input add-exercise__goal-input"
                    disabled={newType.length === 0}
                    placeholder="Goal Per Set"
                    value={goalPerWorkout}
                    type="number"
                    onChange={(e) => setGoalPerWorkout(e.target.value)}
                  />
                ) : (
                  <div className="d-flex flex-row">
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="HH"
                      type="number"
                      name="gpw-hh"
                      value={goalPerWorkoutDuration.hh}
                      onChange={updateGoal}
                    />

                    <p className="pt-2">:</p>
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="MM"
                      type="number"
                      name="gpw-mm"
                      value={goalPerWorkoutDuration.mm}
                      onChange={updateGoal}
                    />

                    <p className="pt-2">:</p>
                    <input
                      className="default-input time-input"
                      disabled={newType.length === 0}
                      placeholder="SS"
                      type="number"
                      name="gpw-ss"
                      value={goalPerWorkoutDuration.ss}
                      onChange={updateGoal}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="">
            <button
              className="btn btn-outline-secondary w-100"
              disabled={createDisabled}
              onClick={createExercise}
            >
              Update
            </button>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default EditExercise;

const areas = ["Upper", "Lower", "Core", "Cardio"];
const types = ["Repetitions", "Duration"];
