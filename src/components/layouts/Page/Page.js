// Package imports
import React from "react";
import { Container } from "@mui/material";
// Local Imports
import Navbar from "./Navbar";

// Template for a page, setting the container, navbar and title.
export default function Page(props) {
  return (
    <Container
      disableGutters
      sx={{
        backgroundColor: "background.default",
        paddingLeft: "1rem",
      }}
    >
      <div className="page-content">
        <h1>{props.title}</h1>
        {props.children}
      </div>
      <Navbar />
    </Container>
  );
}
