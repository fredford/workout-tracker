import React from "react";

import { Link } from "react-router-dom";

const ButtonLink = (props) => {
  let subComponentList = Object.keys(ButtonLink);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  let className = "link-button btn btn-primary " + props.className;
  return (
    <Link to={props.path} className="w-100">
      <button className={className}>
        {subComponents.map((component) => component)}
      </button>
    </Link>
  );
};

const Icon = (props) => {
  let className = "link-button__icon " + props.className;
  return <img className={className} src={props.src} alt="" />;
};
ButtonLink.Icon = Icon;
const Image = (props) => {
  let className = "link-button__image " + props.className;
  return <img className={className} src={props.src} alt="" />;
};
ButtonLink.Image = Image;
const Text = (props) => {
  let className = "mb-0 " + props.className;
  return <p className={className}>{props.children}</p>;
};
ButtonLink.Text = Text;

export default ButtonLink;
