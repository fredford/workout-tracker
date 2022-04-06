import React from "react";
import { Link } from "react-router-dom";

export default function NavbarItem(props) {
  var path = `/${props.name.toLowerCase()}`;

  var classes = "navbar-item ";

  if (window.location.pathname.includes(path)) {
    classes += "navbar-item__active";
  }

  return (
    <Link to={{ pathname: path }} className={classes}>
      <div className="navbar-item__icon-container">{props.icon}</div>
      <div className="navbar-item__header">{props.name}</div>
    </Link>
  );
}
