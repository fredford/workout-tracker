// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Local imports
import Button from "../../Buttons/Button";

/**
 * Component to display a navbar item and redirect to the provided path
 *
 * Status: complete
 */
const NavbarItem = React.memo(function WrappedNavbarItem({ icon, name }) {
  // React hooks
  const navigate = useNavigate();
  // Format the desired path to redirect to
  let path = `/${name.toLowerCase()}`;
  // Base CSS class
  let classes = "navbar-item ";
  // If the navbar-item is the current page set to active
  if (window.location.pathname.includes(path)) {
    classes += "navbar-item__active";
  }

  return (
    <Button border onClick={() => navigate(path)} className={classes}>
      <Button.Icon>{icon}</Button.Icon>
      <Button.Text className="navbar-item__header">{name}</Button.Text>
    </Button>
  );
});

export default NavbarItem;
