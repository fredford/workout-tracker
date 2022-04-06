import React from "react";

import { Link } from "react-router-dom";

const LinkButton = (props) => {
  let subComponentList = Object.keys(LinkButton);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  let className = "btn btn-primary w-100 " + props.className;
  return (
    <Link to={props.path}>
      <button className={className}>
        {subComponents.map((component) => component)}
      </button>
    </Link>
  );
};

const Icon = (props) => <img src={props.path} alt="" />;
LinkButton.Icon = Icon;
const Image = (props) => <img src={props.path} alt="" />;
LinkButton.Image = Image;
const Text = (props) => {
  let className = " " + props.className;
  return <p className={className}>{props.children}</p>;
};
LinkButton.Text = Text;

export default LinkButton;
