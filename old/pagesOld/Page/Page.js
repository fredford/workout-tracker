// Package imports
import React from "react";
// Local Imports
import Navbar from "./Navbar";

// Template for a page, setting the container, navbar and title.
function Page(props) {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content container">{props.children}</div>
    </div>
  );
}
