// Imported Modules
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Page Components
import ListExercises from "./components/ListExercises";
import BreakdownExercises from "./components/BreakdownExercises";
import TopExercises from "./components/TopExercises";

// Contexts
import { ActivityProvider } from "../../../src/contexts/activityContext";

// Helper Components
import Page from "../../../src/components/utility/Page";

// Services
import ExercisesService from "../../../src/services/exercises";
import { resolve } from "../../../src/services/utils";
import { setExercises } from "../../../src/redux/reducers/exercises";

export default function Exercises() {
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveAllExercises();
  }, []);

  const retrieveAllExercises = async () => {
    const [data, error] = await resolve(ExercisesService.getAll());
    dispatch(setExercises(data));
  };

  return (
    <Page>
      <Page.NavBar />
      <Page.Body className="navbar-wrapper">
        <ActivityProvider>
          <div className="row m-3">
            <div className="col-lg-6 stretch-card">
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
      </Page.Body>
    </Page>
  );
}
