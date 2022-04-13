import React from "react";

const Button = (props) => {
  let className = "btn btn-primary " + props.className;
  return (
    <button
      className={className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
