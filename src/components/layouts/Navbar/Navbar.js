import React from "react";
import NavbarItem from "./NavbarItem";

import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

import { Paper } from "@mui/material";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

export default function Navbar() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: "0.5rem",
        left: "0.5rem",
        right: "0.5rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirect: "row",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "8px",
        alignItems: "center",
      }}
      elevation={0}
    >
      <h4 id="title">{""}</h4>
      <div className="navbar-items">
        <NavbarItem name="Dashboard">
          <DashboardTwoToneIcon sx={{ height: "100%" }} />
        </NavbarItem>
        <NavbarItem name="Profile">
          <PermIdentityOutlinedIcon sx={{ height: "100%" }} />
        </NavbarItem>

        <NavbarItem name="Exercises">
          <DirectionsRunIcon sx={{ height: "100%" }} />
        </NavbarItem>
        <NavbarItem name="Workouts">
          <AssignmentOutlinedIcon
            sx={{ height: "100%" }}
            className="navbar-item_icon"
          />
        </NavbarItem>
      </div>
    </Paper>
  );
}
