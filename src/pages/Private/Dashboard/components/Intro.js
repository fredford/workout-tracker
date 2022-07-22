import React from "react";

import { useSelector } from "react-redux";

const Intro = () => {
  const user = useSelector((state) => state.user);

  var today = new Date();
  var currHr = today.getHours();

  var outputMessage = "Good evening";

  if (currHr < 12) {
    outputMessage = "Good morning";
  } else if (currHr < 18) {
    outputMessage = "Good afternoon";
  }
  return (
    <div>
      <h1>
        {outputMessage}, {user.name}!
      </h1>
    </div>
  );
};

export default Intro;
