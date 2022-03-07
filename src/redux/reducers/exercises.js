import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const addExercise = createAsyncThunk(
  "exercises/addExercise",
  async (exercise) => {
    const [data, error] = await ExercisesService.createExercise(exercise)
      .then(function (response) {
        return [response.data.data, null];
      })
      .catch(function (error) {
        let jsonError = error.toJSON();

        if (jsonError.status === 401) {
          localStorage.removeItem("authoToken");
        }

        return [null, "Fail"];
      });
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
  },
  extraReducers: {
    [fetchExercises.fulfilled]: (state, { payload }) => {
      state.exercises = state.exercises.concat(payload);
    },
    [addExercise.fulfilled]: (state, { payload }) => {
      state.exercises = [...state.exercises, payload];
    },
  },
});

export const { setExercises } = exercisesSlice.actions;

export default exercisesSlice.reducer;
