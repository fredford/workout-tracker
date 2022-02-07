import React from "react";
import SideBar from "./components/layouts/SideBar/SideBar";

import "./styles/styles.scss";

import { Link, Route, Routes } from "react-router-dom";

import Exercises from "./pages/Exercises";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  var tempTheme = localStorage.getItem("theme");

  const [theme, setTheme] = React.useState(
    tempTheme === null ? "light" : tempTheme
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route exact path="/exercises" element={<Exercises />} />
        <Route exact path="/workouts" element={<Workouts />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
