import React, { useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/styles.scss";

import { SettingsContext } from "./contexts/settingsContext";

import { Routes, Route } from "react-router-dom";

import Loading from "./pages/Utility/Loading";
import PrivateRoute from "./pages/Utility/PrivateRoute";

import publicRoutes from "./routes/public";
import privateRoutes from "./routes/private";

const App = () => {
  const { theme } = useContext(SettingsContext);

  document.documentElement.setAttribute("data-theme", theme[0]);
  console.log("Here we are");

  return (
    <div className="App" data-theme={theme[0]}>
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
          
        <Route exact path="/private" element={<PrivatePage />} />
 
        <Route
          exact
          path="/exercises/:exerciseId/editexercise"
          element={<EditExercise />}
        />
        <Route exact path="/exercises/:exerciseId" element={<Exercise />} />
      
        <Route exact path="/addexercise" element={<AddExercise />} />
        <Route exact path="/workouts/:workoutId" element={<Sets />} />
        <Route exact path="/workouts" element={<Workouts />} />
     
        <Route exact path="/deleteaccount" element={<DeleteAccount />} />
        <Route exact path="/changeusername" element={<ChangeUsername />} />

        */}
        </Route>
        {publicRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
