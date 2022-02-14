// Package imports
import React from "react";
import { Box, Paper } from "@mui/material";
// Imported Icons
import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// Local components
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: "0.5rem",
        left: "0.5rem",
        right: "0.5rem",
        borderRadius: "0.75rem",
        display: "flex",
        flexDirect: "row",
        justifyContent: "space-between",
        margin: "0 0.5rem",
        padding: "0 0.5rem 0 0",
        alignItems: "center",
      }}
      elevation={1}
    >
      <Box sx={{ color: "text.primary" }}>
        <h4 className="full-text">Workout Tracker</h4>
        <h4 className="short-text">WT</h4>
      </Box>

      <div className="navbar-items">
        <NavbarItem name="Dashboard" icon={<DashboardTwoToneIcon />} />
        <NavbarItem name="Profile" icon={<PermIdentityOutlinedIcon />} />
        <NavbarItem name="Exercises" icon={<DirectionsRunIcon />} />
        <NavbarItem name="Workouts" icon={<AssignmentOutlinedIcon />} />
      </div>
    </Paper>
  );
}
