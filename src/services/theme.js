import { createTheme } from "@mui/material/styles";

import "./theme.css";

const font = "'Rubik', sans-serif";

const Colors = {
  dark: {
    bgMain: "#343a40",
    bgCard: "#212529",
  },
  light: {
    bgMain: "#f8f9fa",
    bgCard: "#fff",
  },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#f8f9fa",
      secondary: "#20B2aaee",
    },
    background: {
      default: "#343a40",
      paper: "#212529",
    },
    primary: {
      main: "#202b2aa",
    },
    secondary: {
      main: "#f8f9fa",
    },
  },
  typography: {
    fontFamily: font,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "#212529",
      secondary: "#20B2aa",
    },
    background: {
      default: "#eeeeee",
      paper: "#ffffff",
    },
    primary: {
      main: "#202b2aa",
    },
    secondary: {
      main: "#212529",
    },
  },
  typography: {
    fontFamily: font,
  },
});
