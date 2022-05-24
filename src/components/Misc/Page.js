import React from "react";
import Navbar from "./Navbar";

const Page = (props) => {
  console.log("page");
  console.log(props.children);

  let subComponentList = Object.keys(Page);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) => {
      console.log(child.type.displayName === key ? child : null);
      return child.type.displayName === key ? child : null;
    });
  });

  return (
    <div className="page">
      {subComponents.map((component) => {
        console.log(component);
        return component;
      })}
    </div>
  );
};

// NavBar Component shown at the top of the page when requested
const NavBar = (props) => {
  return <Navbar />;
};
NavBar.displayName = "NavBar";
Page.NavBar = NavBar;

// Header Componeent shown at the top of the page when requested
const Header = ({ className, center, container, navbar, children }) => {
  let headerClassName = `page-header ${className}`;

  headerClassName += container ? " container" : " me-3 ms-3";
  headerClassName += navbar ? " navbar-page" : "";
  headerClassName += center ? " center-page" : "";

  return <h2 className={headerClassName}>{children}</h2>;
};
Header.displayName = "Header";
Page.Header = Header;

// Body of the page handling all components to be shown
const Body = ({ className, container, navbar, center, children }) => {
  let bodyClassName = `page-body ${className}`;

  bodyClassName += container ? " container" : " me-3 ms-3";
  bodyClassName += navbar ? " navbar-page" : "";
  bodyClassName += center ? " center-page" : "";

  return <div className={bodyClassName}>{children}</div>;
};
Body.displayName = "Body";
Page.Body = Body;

export default Page;
