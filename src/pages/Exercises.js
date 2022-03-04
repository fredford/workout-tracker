import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import ListExercises from "../components/exercises/ListExercises";
import BreakdownExercises from "../components/exercises/BreakdownExercises";
import TopExercises from "../components/exercises/TopExercises";

import { ActivityProvider } from "../contexts/activityContext";

import Page from "./Page/Page";

import Card from "../components/cards/Card";

import ExerciseService from "../services/exercises";

import { resolve } from "../services/utils";

import { setExercises } from "../redux/reducers/exercises";

export default function Exercises() {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExerciseService.getAll());
    dispatch(setExercises(data));
  };

  const retrieveUserExercises = async () => {
    const [data, error] = await resolve(ExerciseService.getUser());
    dispatch(setExercises(data));
  };

  return (
    <Page title="Exercises">
      <ActivityProvider>
        <div className="row">
          <div className="col-xl-4 col-md-6 mb-sm-3 mb-md-0 stretch-card">
            <ListExercises />
          </div>
          {/*
          <div className="col-xl-8 col-md-6 d-flex align-items-stretch">
            <div className="row flex-grow-1">
              <div className="col-xl-6 mb-sm-3 mb-xl-0 stretch-card">
                <BreakdownExercises />
              </div>
              <div className="col-xl-6 stretch-card">
                <TopExercises />
              </div>
            </div>
          </div>
          */}
        </div>
      </ActivityProvider>
    </Page>
  );
}
