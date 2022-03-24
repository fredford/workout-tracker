import React from "react";
import Navbar from "../Navbar/Navbar";

const Page = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Page;
