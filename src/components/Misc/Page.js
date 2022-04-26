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
const Header = (props) => {
  let className = "navbar-page " + props.className;
  return <h1 className={className}>{props.children}</h1>;
};
Page.Header = Header;
const Body = (props) => <div className={props.className}>{props.children}</div>;
Page.Body = Body;

export default Page;
