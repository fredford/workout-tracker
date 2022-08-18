import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const ButtonBasic = (props) => {
  let newProps = { ...props };

  newProps.className += " h-100 w-100";

  return (
    <ButtonWrapper {...newProps}>
      <div className="basic-button">
        {props.children[0]}
        {props.children[1] && <p className="no-overflow">{props.children[1]}</p>}
      </div>
    </ButtonWrapper>
  );
};

export default ButtonBasic;
