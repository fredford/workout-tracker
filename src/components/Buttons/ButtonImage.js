import React from "react";

const ButtonImage = (props) => {
  let className = "btn btn-primary w-100 button " + props.className;

  let subComponentList = Object.keys(ButtonImage);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {subComponents.map((component) => component)}
    </button>
  );
};

const Image = (props) => {
  let className = "button__image " + props.className;
  return <img className={className} src={props.src} alt="" />;
};
ButtonImage.Image = Image;

const Text = (props) => {
  let className = "button__text mb-0 " + props.className;
  return <p className={className}>{props.children}</p>;
};
ButtonImage.Text = Text;

export default ButtonImage;
