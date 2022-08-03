import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import services from "../../services/services";

export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async () => {
    const [data, error] = await services.exercises.getAll()

    if (error) throw error;
    return data;
  }
);

export const addExercise = createAsyncThunk(
  "exercises/addExercise",
  async (exercise) => {
    const [data, error] = await services.exercises.createExercise(exercise);

    if (error) throw error;
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
    [fetchExercises.fulfilled]: (state, {payload}) => {
      state.exercises = payload;
    },
    [addExercise.fulfilled]: (state, {payload}) => {
      state.exercises = [...state.exercises, payload];
    },
  },
});

export const {setExercises} = exercisesSlice.actions;

export default exercisesSlice.reducer;

export const selectExerciseById = (state, exerciseId) => {
  // TODO check if a list is being returned or an object
  return state.exercises.exercises.find(
    (exercise) => exercise._id === exerciseId
  );
};
