import React from "react";

import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();

  let className = "standard-button " + props.className;

  className += props.horizontal ? " horizontal-button" : " vertical-button";

  className += props.checked ? " button__checked" : "";
  className += props.border ? " button__border" : "";
  className += props.accent ? " button__accent" : "";

  let subComponentList = Object.keys(Button);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

  const handlePath = () => {
    navigate(props.path);
  };

  const onClick = props.path ? handlePath : props.onClick;

  return (
    <button className={className} onClick={onClick} disabled={props.disabled}>
      {subComponents.map((component) => component)}
    </button>
  );
};

const Icon = (props) => {
  let className = "button__icon " + props.className;
  return <div className={className}>{props.children}</div>;
};
Icon.displayName = "Icon";
Button.Icon = Icon;

const Image = (props) => {
  let className = "button__image " + props.className;

  className += props.active ? " button__active" : "";

  return <div className={className}>{props.children}</div>;
};
Image.displayName = "Image";
Button.Image = Image;

const Text = (props) => {
  let className = "button__text mb-0 " + props.className;
  return <p className={className}>{props.children}</p>;
};
Text.displayName = "Text";
Button.Text = Text;

export default Button;
