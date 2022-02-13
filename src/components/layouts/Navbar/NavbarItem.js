import React from "react";

import { Link } from "react-router-dom";

import { Box, Grid, Paper } from "@mui/material";

export default function SideBarItem(props) {
  var path = `/${props.name.toLowerCase()}`;

  var classes = "navbar-item ";

  if (window.location.pathname === path) {
    classes += "navbar-item__active";
  }

  return (
    <Link to={{ pathname: path }} className={classes}>
      <Box
        sx={{ color: "text.primary" }}
        className="navbar-item__icon-container"
      >
        {props.children}
      </Box>
      <Box sx={{ color: "text.primary" }} className="navbar-item__header">
        {props.name}
      </Box>
    </Link>
  );
}
