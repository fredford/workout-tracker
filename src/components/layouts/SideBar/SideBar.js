import React from "react";
import { Grid1x2 } from "react-bootstrap-icons";

import { FaWalking } from "react-icons/fa";
import { BsClipboardData } from "react-icons/bs";
import SideBarItem from "./SideBarItem";
import SideBarProfile from "./SideBarProfile";

import SideBarFooter from "./SideBarFooter";

export default function SideBar({ switchTheme, theme }) {
  return (
    <div className="sidebar">
      <h2 id="title">{""}</h2>

      <SideBarProfile profile={profile} />

      <SideBarItem name="Dashboard">
        <Grid1x2 className="sidebar_icon-item" />
      </SideBarItem>
      <SideBarItem name="Exercises">
        <FaWalking className="sidebar_icon-item" />
      </SideBarItem>
      <SideBarItem name="Workouts">
        <BsClipboardData className="sidebar_icon-item" />
      </SideBarItem>
      <SideBarFooter switchTheme={switchTheme} theme={theme} />
    </div>
  );
}

const profile = {
  name: "Fraser Redford",
  image: "fraser-redford_profile.jpg",
  link: "4fa7ae26-82e1-11ec-a8a3-0242ac120002",
};
