import React from "react";

export default function SideBarItem(props) {
  var hrefTag = `${props.name.toLowerCase()}`;
  return (
    <a href={hrefTag}>
      <div className="sidebar__icon">{props.children}</div>
      <div className="sidebar__header">{props.name}</div>
    </a>
  );
}
