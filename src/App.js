import React from "react";
import SideBar from "./components/layouts/SideBar/SideBar";
import Exercises from "./pages/Exercises";
import "./styles/styles.scss";

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
      <SideBar switchTheme={switchTheme} theme={theme} />
      <div className="content-container">
        <div className="content">
          <Exercises />
        </div>
      </div>
    </div>
  );
}

export default App;
