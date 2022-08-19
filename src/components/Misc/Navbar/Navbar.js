// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { MdLogout } from "react-icons/md";

// Local component imports
import NavbarItem from "./NavbarItem";
import Button from "../../Buttons/buttons";

/**
 * Component for displaying the navbar on the edge of the screen
 *
 * Status: complete
 */
const Navbar = () => {
  // React hooks
  const navigate = useNavigate();

  // Function for logging the user out of their account
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/startup");
  };

  return (
    <div className="navbar__page">
      <div className="navbar__logo">
        <h1>Fitrak</h1>
      </div>

      <div className="navbar__items">
        <NavbarItem name="Dashboard" icon={DashboardTwoToneIcon} />
        <NavbarItem name="Profile" icon={PermIdentityOutlinedIcon} />
        <NavbarItem name="Exercises" icon={DirectionsRunIcon} />
        <NavbarItem name="Workouts" icon={AssignmentOutlinedIcon} />
      </div>

      <Button Icon={MdLogout} className="navbar__logout" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
