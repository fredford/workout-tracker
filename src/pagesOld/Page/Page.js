// Package imports
import React from "react";
// Local Imports
import Navbar from "./Navbar";

// Template for a page, setting the container, navbar and title.
function Page(props) {
  let subComponentList = Object.keys(Page);

  let subComponents = subComponents.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="page-container">
      <Navbar />
      <div className="page-content container">{props.children}</div>
    </div>
  );
}

const navbar = (props) => <Navbar />;
Page.Navbar = navbar;
const Title = (props) => <h1>{props.children}</h1>;
Page.Title = Title;

export default Page;
