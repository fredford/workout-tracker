import { Container } from "@mui/material";
import React from "react";

import Navbar from "./Navbar/Navbar";

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
    <Container>
      <div className="content">
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <Navbar />
    </Container>
  );
}
