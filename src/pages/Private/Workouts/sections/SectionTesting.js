import React from "react";
import ButtonDanger from "../../../../components/Buttons/ButtonDanger";
import ButtonIcon from "../../../../components/Buttons/ButtonIcon";

import { FaArrowLeft } from "react-icons/fa";
import ButtonBasic from "../../../../components/Buttons/ButtonBasic";
import ButtonImage from "../../../../components/Buttons/ButtonImage";

const SectionTesting = () => {
  return (
    <div>
      <h3>Section Testing</h3>
      <div className="d-flex flex-row">
        <ButtonDanger onClick={() => console.log("hello")}>Hello</ButtonDanger>
        <ButtonIcon>
          <FaArrowLeft />
        </ButtonIcon>
      </div>
      <div className="w-100">
        <ButtonBasic>
          <FaArrowLeft size={40} />
          Hello
        </ButtonBasic>
        <ButtonImage src="./maintenance.png" alt="Exercise">
          Hello
        </ButtonImage>
      </div>
    </div>
  );
};

export default SectionTesting;
