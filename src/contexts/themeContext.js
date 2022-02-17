import React, { useState } from "react";

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
  var localTheme = localStorage.getItem("theme");
  var stateTheme = localTheme === null ? "light" : localTheme;

  const [theme, setTheme] = useState(stateTheme);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
