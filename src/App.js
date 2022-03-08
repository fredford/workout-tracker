import React, { useContext } from "react";

import "./styles/styles.scss";

import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute";

import Exercises from "./pages/Exercises/Exercises";
import Dashboard from "./pages/Dashboard/Dashboard";
import Workouts from "./pages/Workouts/Workouts";
import NotFound from "./pages/NotFound";
import Login from "./pages/Startup/Login";
import Register from "./pages/Startup/Register";
import ForgotPassword from "./pages/Startup/ForgotPassword";
import ResetPassword from "./pages/Startup/ResetPassword";
import PrivatePage from "./pages/PrivatePage";
import Loading from "./pages/Loading";
import ChangePassword from "./pages/Profile/ChangePassword";
import ChangeUsername from "./pages/Profile/ChangeUsername";
import DeleteAccount from "./pages/Profile/DeleteAccount";

import Profile from "./pages/Profile/Profile";

import Startup from "./pages/Startup/Startup";
import { SettingsContext } from "./contexts/settingsContext";
import MessagePage from "./pages/Page/MessagePage";
import AddExercise from "./pages/Exercises/AddExercise";
import Exercise from "./pages/Exercise/Exercise";
import EditExercise from "./pages/Exercise/EditExercise";

const App = () => {
  const { theme } = useContext(SettingsContext);

  return (
    <div className="App" data-theme={theme[0]}>
      <Routes>
        <Route exact path="/" element={<Loading />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/private" element={<PrivatePage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route
            exact
            path="/exercises/:exerciseId/editexercise"
            element={<EditExercise />}
          />
          <Route exact path="/exercises/:exerciseId" element={<Exercise />} />
          <Route exact path="/exercises" element={<Exercises />} />
          <Route exact path="/addexercise" element={<AddExercise />} />
          <Route exact path="/workouts" element={<Workouts />} />
          <Route exact path="/changepassword" element={<ChangePassword />} />
          <Route exact path="/deleteaccount" element={<DeleteAccount />} />
          <Route exact path="/changeusername" element={<ChangeUsername />} />
        </Route>

        <Route exact path="/message/:message" element={<MessagePage />} />
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
    </div>
  );
};

export default App;
