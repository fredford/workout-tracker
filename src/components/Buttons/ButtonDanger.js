import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const ButtonDanger = (props) => {
  return (
    <ButtonWrapper {...props}>
      <p className="danger-button">{props.children}</p>
    </ButtonWrapper>
  );
};

export default ButtonDanger;
