import React from "react";

import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ButtonCard = (props) => {
  let subComponentList = Object.keys(ButtonCard);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(props.children, (child) =>
      child.type.name === key ? child : null
    );
  });

  var className = "p-3 button-card " + props.className;
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.logout) {
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      navigate(props.path);
    }
  };

  return (
    <Card className={className}>
      <div className="button-card__contents" onClick={handleClick}>
        {subComponents.map((component) => component)}
      </div>
    </Card>
  );
};

const Image = (props) => <img src={props.children} alt="" />;
ButtonCard.Image = Image;
const Title = (props) => <h4 className="mb-2">{props.children}</h4>;
ButtonCard.Title = Title;
const Subtitle = (props) => <h6>{props.children}</h6>;
ButtonCard.Subtitle = Subtitle;

export default ButtonCard;
