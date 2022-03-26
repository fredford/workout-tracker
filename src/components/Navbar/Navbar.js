import React from "react";
import { Link } from "react-router-dom";
import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// Local components
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="page-navbar">
      <div className="navbar-title">
        <h2 className="full-text">Workout Tracker</h2>
        <h2 className="short-text">WT</h2>
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