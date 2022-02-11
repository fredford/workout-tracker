import React from "react";

import { Link } from "react-router-dom";

export default function SideBarItem(props) {
  var path = `/${props.name.toLowerCase()}`;

  return (
    <Link to={{ pathname: path }}>
      <div className="sidebar__icon">{props.children}</div>
      <div className="sidebar__header">{props.name}</div>
    </Link>
  );
}
