import React from "react";

import { Link } from "react-router-dom";

import { Box } from "@mui/material";

export default function NavbarItem(props) {
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
        {props.icon}
      </Box>
      <Box sx={{ color: "text.primary" }} className="navbar-item__header">
        {props.name}
      </Box>
    </Link>
  );
}
