// Library imports
import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Component for providing a Button, provides a series of flexible subcomponents
 * that can be used to improve consistency and re-usability.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Button = (props) => {
  // React hooks to redirect the user
  const navigate = useNavigate();
  // Base CSS class to be used for buttons
  let className = "standard-button ";

  // Additional CSS class modifiers
  className += props.className;
  className += props.light ? " light-button " : ""
  className += props.active ? " button__active" : "";
  className += props.horizontal ? " horizontal-button" : " vertical-button";
  className += props.checked ? " button__checked" : "";
  className += props.border ? " button__border" : "";
  className += props.accent ? " button__accent" : "";

  // Get a list of DOM keys used for the Button component
  let subComponentList = Object.keys(Button);
  // Iterate through the list of child components provided
  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.displayName === key ? child : null
    );
  });

  // Redirect the user to the provided path
  const handlePath = () => {
    navigate(props.path);
  };

  // Handle onClick path redirection
  const onClick = props.path ? handlePath : props.onClick;

  return (
    <button className={className} onClick={onClick} disabled={props.disabled}>
      {subComponents.map((component) => component)}
    </button>
  );
};

// Icon component for displaying icons in the button
const Icon = (props) => {
  let className = "button__icon " + props.className;
  return <div className={className}>{props.children}</div>;
};
Icon.displayName = "Icon";
Button.Icon = Icon;

// Image component for displaying images in the button
const Image = (props) => {
  let className = "button__image " + props.className;
  // Set the color scheme to active when the button is pressed or active
  className += props.active ? " button__active" : "";

  return <div className={className}>{props.children}</div>;
};
Image.displayName = "Image";
Button.Image = Image;

// Text component to allow the usage of text and text modification in the button
const Text = (props) => {
  let className = "button__text mb-0 " + props.className;
  return <p className={className}>{props.children}</p>;
};
Text.displayName = "Text";
Button.Text = Text;

export default Button;
