import { createTheme } from "@mui/material/styles";

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
    type: "dark",
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
});

export const lightTheme = createTheme({
  palette: {
    type: "light",
    text: {
      primary: "#212529",
      secondary: "#20B2aa",
    },
  },

  background: {
    default: "#f8f9fa",
    paper: "#fff",
  },
});
