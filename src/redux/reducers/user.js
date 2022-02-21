import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { config, resolve } from "../../services/utils";

import { profilePath } from "../../services/apiPaths";

import UserService from "../../services/user";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const [data, error] = await resolve(UserService.getUser());

  if (error && error.status === 401) {
    localStorage.removeItem("authToken");
  }
  return data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
  const response = await axios
    .put(profilePath, user, config)
    .catch(function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem("authToken");
      }
    });
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    name: "",
    email: "",
    theme: "",
  },
  reducers: {
    updateName(state, action) {
      const { name } = action.payload;
      state.name = name;
    },
    updateTheme(state, action) {
      const { theme } = action.payload;
      state.theme = theme;
    },
    setUser(state, action) {
      const { id, name, email, theme } = action.payload;
      state._id = id;
      state.name = name;
      state.email = email;
      state.theme = theme;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {},
    [fetchUser.fulfilled]: (state, { payload }) => {
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.theme = payload.theme;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state._id = payload.data._id;
      state.name = payload.data.name;
      state.email = payload.data.email;
      state.theme = payload.data.theme;
    },
  },
});

export const { updateName, updateTheme, setUser } = userSlice.actions;

export default userSlice.reducer;
