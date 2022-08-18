import React, { useState } from "react";
import Button from "../../../../components/Buttons/buttons";

import { FaArrowLeft } from "react-icons/fa";

const SectionTesting = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h3>Section Testing</h3>
      <div className="d-flex flex-row">
        <Button iconOnly Icon={FaArrowLeft} onClick={() => console.log("hello")} />
      </div>
      <div className="w-100">
        <Button iconOnly Icon={FaArrowLeft} onClick={() => console.log("hello")}></Button>
        <Button fill onClick={() => console.log("hello")}>
          Hello
        </Button>
        <Button fill disabled onClick={() => console.log("hello")}>
          Hello there
        </Button>
        <Button toggle Icon={FaArrowLeft}>
          Hello
        </Button>

        <Button
          toggle
          src={"./max.png"}
          alt="Max"
          active={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          Max
        </Button>
      </div>
    </div>
  );
};

export default SectionTesting;
