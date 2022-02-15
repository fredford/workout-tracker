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
    posts: [],
  },
  reducers: {},
  extraReducers: {
    [fetchExercises.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.posts = state.posts.concat(payload);
    },
  },
});

export default exercisesSlice.reducer;
