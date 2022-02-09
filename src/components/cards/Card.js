import React from "react";

const Card = (props) => {
  let classes = `default-card ${props.className}`;

  return (
    <div className={classes}>
      <h4>{props.title}</h4>
      {props.children}
    </div>
  );
};

export default Card;
