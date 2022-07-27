import React from "react";
import Navbar from "./Navbar/Navbar";

// Main parent component handling all Page presentations
const Page = (props) => {
  // Get a list of all Page subcomponents
  let subComponentList = Object.keys(Page);

  let containerClassName = props.container ? " container" : "";

  let pageBodyContainerClassname = props.navbar
    ? "page-body__container"
    : "center-page";

  // Get the child components for Page and display them in the order designated
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) => {
      return child.type.displayName === key ? child : null;
    });
  });

  return (
    <div className="page">
      {props.navbar ? <Navbar /> : <></>}
      <div className={pageBodyContainerClassname}>
        <div className={containerClassName}>
          {subComponents.map((component) => {
            return component;
          })}
        </div>
      </div>
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
const Header = ({
  className,
  center,
  container,
  navbar,
  header,
  subheader,
}) => {
  let headerClassName = `page-header ${className}`;

  headerClassName += container ? " container" : " me-3 ms-3";
  headerClassName += navbar ? " navbar-page" : "";
  headerClassName += center ? " center-page" : "";

  return (
    <div className={headerClassName}>
      <h1 className="page-header__header">{header}</h1>
      <h2 className="page-header__subheader">{subheader}</h2>
      <hr className="page-header__bar" />
    </div>
  );
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
