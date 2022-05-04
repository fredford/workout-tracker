import React from "react";

import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="page-navbar">
      <div className="navbar-title">
        <h1 className="full-text">Workout Tracker</h1>
        <h1 className="short-text">WT</h1>
      </div>

      <div className="navbar-items">
        <NavbarItem name="Dashboard" icon={<DashboardTwoToneIcon />} />
        <NavbarItem name="Profile" icon={<PermIdentityOutlinedIcon />} />
        <NavbarItem name="Exercises" icon={<DirectionsRunIcon />} />
        <NavbarItem name="Workouts" icon={<AssignmentOutlinedIcon />} />
      </div>
    </div>
  );
};

export default Navbar;
