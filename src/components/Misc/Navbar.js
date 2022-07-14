import React from "react";

import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { MdLogout } from "react-icons/md";

import NavbarItem from "./NavbarItem";

import Button from "../Buttons/Button";

const Navbar = () => {
  return (
    <div className="page-navbar">
      <div className="navbar-title__container">
        <h1 className="navbar-title">Fitrak</h1>
      </div>

      <div className="navbar-items">
        <NavbarItem name="Dashboard" icon={<DashboardTwoToneIcon />} />
        <NavbarItem name="Profile" icon={<PermIdentityOutlinedIcon />} />
        <NavbarItem name="Exercises" icon={<DirectionsRunIcon />} />
        <NavbarItem name="Workouts" icon={<AssignmentOutlinedIcon />} />
      </div>

      <Button className="w-100 navbar__logout">
        <Button.Icon>
          <MdLogout />
        </Button.Icon>
        <Button.Text className="navbar__logout-text">Logout</Button.Text>
      </Button>
    </div>
  );
};

export default Navbar;
