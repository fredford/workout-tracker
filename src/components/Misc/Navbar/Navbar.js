// Library imports
import React from "react";
import { useDispatch } from "react-redux";
import DashboardTwoToneIcon from "@mui/icons-material/Dashboard";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { MdLogout } from "react-icons/md";

// Local component imports
import NavbarItem from "./NavbarItem";
import Button from "../../Buttons/Button";

// Redux store
import { resetUser } from "../../../redux/reducers/user";
/**
 * Component for displaying the navbar on the edge of the screen
 *
 * Status: complete
 */
const Navbar = () => {
  // React hooks
  const dispatch = useDispatch();

  // Function for logging the user out of their account
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(resetUser());
  };

  return (
    <div className="navbar__container">
      <h1 className="navbar__logo">Fitrak</h1>
      <div className="navbar__items">
        <NavbarItem name="Dashboard" icon={DashboardTwoToneIcon} />
        <NavbarItem name="Profile" icon={PermIdentityOutlinedIcon} />
        <NavbarItem name="Exercises" icon={DirectionsRunIcon} />
        <NavbarItem name="Workouts" icon={AssignmentOutlinedIcon} />
      </div>
      <Button path="/startup" Icon={MdLogout} className="navbar__logout" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
