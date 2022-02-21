import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { exercisesPath } from "../../services/apiPaths";

import { config } from "../../services/utils";

import { resolve } from "../../services/utils";
import ExercisesService from "../../services/exercises";

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async () => {
    const [data, error] = await resolve(ExercisesService.getAll());

    if (error && error.status === 401) {
      localStorage.removeItem("authToken");
    }
    return data;
  }
);

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
  },
  reducers: {
    setExercises(state, action) {
      state.exercises = action.payload;
    },
    addExercise(state, action) {
      state.exercises = state.exercises.concat(action.payload);
    },
  },
  extraReducers: {
    [fetchExercises.fulfilled]: (state, { payload }) => {
      state.exercises = state.exercises.concat(payload);
    },
  },
});

export const { setExercises, addExercise } = exercisesSlice.actions;

export default exercisesSlice.reducer;
