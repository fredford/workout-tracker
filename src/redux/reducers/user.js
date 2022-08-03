// Library imports
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Services
import services from "../../services/services";

// Reducer to fetch the user information
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {

  // Retrieve user information from the server
  const [data, error] = await services.user.getUser(null, null);

  if (error) throw error;
  return data;
});

// Reducer to update the user information
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (newUser) => {

    // Request to update the user information
    const [data, error] = await services.user.updateUser(newUser, null, null)
    if (error) throw error;
    return data;
  }
);

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
      state._id = payload._id;
      state.name = payload.name;
      state.email = payload.email;
      state.theme = payload.theme;
    },
  },
});

export const { updateName, updateTheme, setUser } = userSlice.actions;

export default userSlice.reducer;
