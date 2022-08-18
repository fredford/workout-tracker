import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const ButtonIcon = (props) => {
  return (
    <ButtonWrapper {...props}>
      <div className="icon-button">{props.children}</div>
    </ButtonWrapper>
  );
};

export default ButtonIcon;
