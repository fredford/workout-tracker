import React from "react";
//import Navbar from "../Navbar/Navbar";

const Page = (props) => {
  let subComponentList = Object.keys(Page);
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return <div>{subComponents.map((component) => component)}</div>;
};

//const NavBar = (props) => <Navbar />;
//Page.NavBar = NavBar;
const Body = (props) => <div className={props.className}>{props.children}</div>;
Page.Body = Body;

export default Page;
