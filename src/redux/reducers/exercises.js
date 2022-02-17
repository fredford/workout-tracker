import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { exercisesPath } from "../../services/apiPaths";

import { config } from "../../services/utils";

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async () => {
    const response = await axios
      .get(exercisesPath, config)
      .catch(function (error) {
        if (error.response.status === 401) {
          localStorage.removeItem("authToken");
        }
      });
    return response.data;
  }
);

const exercisesSlice = createSlice({
  name: "exercises",
  initialState: {
    exercises: [],
  },
  reducers: {},
  extraReducers: {
    [fetchExercises.fulfilled]: (state, { payload }) => {
      state.exercises = state.exercises.concat(payload.data);
    },
  },
});

export default exercisesSlice.reducer;
