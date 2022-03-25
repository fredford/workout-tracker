import React from "react";
import Navbar from "../Navbar/Navbar";

const Page = (props) => {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">{props.children}</div>
    </div>
  );
};

export default Page;
