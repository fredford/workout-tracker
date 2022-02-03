import React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function SideBarFooter({ switchTheme }) {
  var isChecked = false;

  if (localStorage.getItem("theme") === "dark") {
    isChecked = true;
  }

  const changeTheme = () => {
    switchTheme();
  };
  return (
    <div className="sidebar-footer">
      <div className="sidebar-footer__theme-toggle">
        <input
          type="checkbox"
          className="sidebar-footer__theme-checkbox"
          id="checkbox"
          onChange={changeTheme}
          checked={isChecked}
        />
        <label htmlFor="checkbox" className="sidebar-footer__theme-label">
          <FaMoon className="fa-moon" />
          <FaSun className="fa-sun" />
          <div className="ball" />
        </label>
      </div>

      <div className="mt-2">
        <h6 className="sidebar-footer__text">Fraser Redford</h6>
        <a
          href="https://github.com/fredford"
          className="sidebar-footer__github"
        >
          <BsGithub className="sidebar-footer__github-icon" />
          {"  "}
          GitHub
        </a>
      </div>
    </div>
  );
}
