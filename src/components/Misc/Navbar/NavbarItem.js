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
  let classes = "navbar__item w-100 no-gap ";
  // If the navbar-item is the current page set to active
  if (window.location.pathname.includes(path)) {
    classes += "navbar__item-active";
  }

  return (
    <Button Icon={icon} onClick={() => navigate(path)} className={classes}>
      {name}
    </Button>
  );
});

export default NavbarItem;
