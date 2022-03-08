import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../../components/cards/Card";
import Page from "../Page/Page";

import { addExercise } from "../../redux/reducers/exercises";

const AddExercise = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercises);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  const [name, setName] = useState("");

  var errorName = "";

  const [newArea, setNewArea] = useState("");
  const [newType, setNewType] = useState("");

  var createDisabled = true;

  // Check that all fields have been filled out
  if (name.length !== 0 && newArea.length !== 0 && newType.length !== 0) {
    createDisabled = false;
  }
  // Check if the name already exists in the system
  if (exercises.some((obj) => obj.name === name)) {
    console.log(name);

    createDisabled = false;
    errorName = "Exercise name already exists";
  }

  const createExercise = async () => {
    var newExercise = {
      name,
      area: newArea,
      type: newType,
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
        <h1 className="add-exercise__title">Add Exercise</h1>
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
                        onChange={(e) => setNewType(e.target.value)}
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
          </div>

          <div className="">
            <button
              className="btn btn-standard w-100"
              disabled={createDisabled}
              onClick={createExercise}
            >
              Create
            </button>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default AddExercise;

const areas = ["Upper", "Lower", "Core", "Cardio"];
const types = ["Repetitions", "Duration"];
