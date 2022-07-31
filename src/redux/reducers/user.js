import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import UserService from "../../services/user";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const [data, error] = await UserService.getUser()
    .then(function (response) {
      return [response.data.data, null];
    })
    .catch(function (error) {
      let jsonError = error.toJSON();

      if (jsonError.status === 401) {
        localStorage.removeItem("authToken");
      }

      return [null, "Fail"];
    });
  if (error) {
    console.log(error);
  }
  return data;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (newUser) => {
    const [data, error] = await UserService.updateUser(newUser).then(
      (result) => {
        if (result.status === 200 && result.data.success) {
          return [result.data.data, null];
        }
      },
      (error) => {
        if (error.status === 401) {
          localStorage.removeItem("authToken");
          window.location.href(`${this.base_url}/startup`);
        } else {
          console.log(error);
          return [null, error];
        }
      }
    );
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
