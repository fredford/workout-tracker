import React from "react";
import Navbar from "./Navbar";

const Page = (props) => {
  let subComponentList = Object.keys(Page);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="page">{subComponents.map((component) => component)}</div>
  );
};

const NavBar = (props) => <Navbar />;
Page.NavBar = NavBar;
const Header = ({ className, center, container, navbar, children }) => {
  let headerClassName = `page-header ${className}`;

  headerClassName += container ? " container" : " me-3 ms-3";
  headerClassName += navbar ? " navbar-page" : "";
  headerClassName += center ? " center-page" : "";

  return <h2 className={headerClassName}>{children}</h2>;
};
Page.Header = Header;
const Body = ({ className, container, navbar, center, children }) => {
  let bodyClassName = `page-body ${className}`;

  bodyClassName += container ? " container" : " me-3 ms-3";
  bodyClassName += navbar ? " navbar-page" : "";
  bodyClassName += center ? " center-page" : "";

  return <div className={bodyClassName}>{children}</div>;
};
Page.Body = Body;

export default Page;
