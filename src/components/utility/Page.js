import React from "react";
import Navbar from "../Navbar/Navbar";

const Page = (props) => {
  var className = "content-wrapper ";

  if (props.className) {
    className += props.className;
  }
  return (
    <div>
      <Navbar />
      <div className={className}>{props.children}</div>
    </div>
  );
};

export default Page;
