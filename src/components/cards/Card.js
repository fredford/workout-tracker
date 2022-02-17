import React from "react";

const Card = (props) => {
  var classes = `default-card ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
