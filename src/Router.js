import React, { useContext } from "react";

import { Routes, Route } from "react-router-dom";

import { SettingsContext } from "./contexts/settingsContext";

import Loading from "./pages/Utility/Loading";

import PrivateRoute from "./components/routing/PrivateRoute";
import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

const Router = () => {
  const { theme } = useContext(SettingsContext);

  console.log(theme);

  return (
    <Routes>
      <Route exact path="/" element={<Loading />} />
      <Route element={<PrivateRoute />}>
        {privateRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.element}
            />
          );
        })}
        {/*
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
        <Route exact path="/workouts/:workoutId" element={<Sets />} />
        <Route exact path="/workouts" element={<Workouts />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/deleteaccount" element={<DeleteAccount />} />
        <Route exact path="/changeusername" element={<ChangeUsername />} />

        */}
      </Route>
      {publicRoutes.map((route, index) => {
        return (
          <Route key={index} exact path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
};

export default Router;
