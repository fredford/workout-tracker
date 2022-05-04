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

  headerClassName += container ? " container" : "";
  headerClassName += navbar ? " navbar-page" : "";
  headerClassName += center ? " center-page" : "";

  return <h1 className={headerClassName}>{children}</h1>;
};
Page.Header = Header;
const Body = ({ className, container, navbar, center, children }) => {
  let bodyClassName = `${className}`;

  bodyClassName += container ? " container" : "";
  bodyClassName += navbar ? " navbar-page" : "";
  bodyClassName += center ? " center-page" : "";

  return <div className={bodyClassName}>{children}</div>;
};
Page.Body = Body;

export default Page;
