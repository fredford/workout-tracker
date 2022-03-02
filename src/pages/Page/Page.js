// Package imports
import React from "react";
// Local Imports
import Navbar from "./Navbar";

// Template for a page, setting the container, navbar and title.
export default function Page(props) {
  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
}
