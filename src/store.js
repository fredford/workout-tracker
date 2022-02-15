import { configureStore } from "@reduxjs/toolkit";
import exercisesReducer from "./redux/reducers/exercises";
import userReducer from "./redux/reducers/user";

export default configureStore({
  reducer: {
    user: userReducer,
    exercises: exercisesReducer,
  },
});
