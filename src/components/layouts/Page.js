import React from "react";

import { Container } from "react-bootstrap";
import SideBar from "./SideBar/SideBar";

export default function Page(props) {
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
    <div className="page-container">
      <SideBar switchTheme={switchTheme} theme={theme} />
      <div className="content">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}
