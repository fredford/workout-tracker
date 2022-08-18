import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const ButtonImage = (props) => {
  let newProps = { ...props };

  newProps.className += " h-100 w-100";

  return (
    <ButtonWrapper {...newProps}>
      <div className="basic-button">
        <img className="standard-image" src={props.src} alt={props.alt} />
        <p>{props.children}</p>
      </div>
    </ButtonWrapper>
  );
};

export default ButtonImage;
