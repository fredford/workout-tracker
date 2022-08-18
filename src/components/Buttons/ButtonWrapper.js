import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonWrapper = (props) => {
  const navigate = useNavigate();

  let className = "default-button ";

  className += props.className;

  // Redirect the user to the provided path
  const handlePath = () => {
    navigate(props.path);
  };

  // Handle onClick path redirection
  const onClick = props.path ? handlePath : props.onClick;

  return (
    <button className={className} onClick={onClick} id={props?.id}>
      {props.children}
    </button>
  );
};

export default ButtonWrapper;
