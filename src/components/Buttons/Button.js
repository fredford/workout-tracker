import React from "react";

const Button = (props) => {
  let className = "btn btn-primary w-100 " + props.className;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
