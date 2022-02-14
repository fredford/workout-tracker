import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { config } from "../../services/utils";

import { profilePath } from "../../services/apiPaths";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await axios.get(profilePath, config);
  return response.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async (user) => {
  const response = await axios.put(profilePath, user, config);
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
      state._id = payload.data._id;
      state.name = payload.data.name;
      state.email = payload.data.email;
      state.theme = payload.data.theme;
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
