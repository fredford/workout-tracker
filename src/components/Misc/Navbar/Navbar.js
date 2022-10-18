// Library imports
import React from "react";
import { useDispatch } from "react-redux";
import { MdLogout, MdDashboard } from "react-icons/md";
import { FaUser, FaRunning, FaClipboardList } from "react-icons/fa";

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
        <NavbarItem name="Dashboard" icon={MdDashboard} />
        <NavbarItem name="Profile" icon={FaUser} />
        <NavbarItem name="Exercises" icon={FaRunning} />
        <NavbarItem name="Workouts" icon={FaClipboardList} />
      </div>
      <Button path="/startup" Icon={MdLogout} className="navbar__logout" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
