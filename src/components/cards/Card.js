import React from "react";

const Card = (props) => {
  var classes = "default-card ";

  if (props.className) {
    classes += props.className;
  }

  return (
    <div className={classes}>
      {props.title ? <h4>{props.title}</h4> : <></>}
      {props.children}
    </div>
  );
};

export default Card;
