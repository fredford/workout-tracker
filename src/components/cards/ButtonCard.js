import React from "react";

import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ButtonCard = (props) => {
  var className = "p-3 button-card " + props.className;
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.title === "Logout") {
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      navigate(props.path);
    }
  };

  return (
    <Card className={className}>
      <div className="button-card__contents" onClick={handleClick}>
        <img src={props.image} alt="" />

        <h4 className="mb-2">{props.title}</h4>
        <h6>{props.subtitle}</h6>
      </div>

      {props.children ? (
        <div className="d-flex justify-content-center mt-3">
          {props.children}
        </div>
      ) : (
        <></>
      )}
    </Card>
  );
};

export default ButtonCard;
