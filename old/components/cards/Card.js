import React from "react";

const Card = (props) => {
  var classes = "card standard-card ";

  if (props.className) {
    classes += props.className;
  }

  return (
    <div className={classes}>
      {props.title ? <h4>{props.title}</h4> : <></>}
      {props.subtitle ? (
        <h6 className="text-muted mt-1">{props.subtitle}</h6>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  );
};

export default Card;
