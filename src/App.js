import React from "react";

import "./styles/styles.scss";

import { CssBaseline } from "@mui/material";

import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import Exercises from "./pages/Exercises";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import NotFound from "./pages/NotFound";
import Login from "./pages/Startup/Login";
import Register from "./pages/Startup/Register";
import ForgotPassword from "./pages/Startup/ForgotPassword";
import ResetPassword from "./pages/Startup/ResetPassword";
import PrivatePage from "./pages/PrivatePage";

import Profile from "./pages/Profile";

import Startup from "./pages/Startup/Startup";

import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "./services/theme.js";

const App = () => {
  var tempTheme = localStorage.getItem("theme");

  var theme =
    tempTheme === "light" || tempTheme === null ? lightTheme : darkTheme;

  var oldtheme = "dark";

  return (
    <div className="App" data-theme={oldtheme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/profile/:userId" element={<Profile />} />
            <Route exact path="/private" element={<PrivatePage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/exercises" element={<Exercises />} />
            <Route exact path="/workouts" element={<Workouts />} />
          </Route>

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            exact
            path="/resetpassword/:resetToken"
            element={<ResetPassword />}
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/startup" element={<Startup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
