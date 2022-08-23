import React, { useEffect, useState } from "react";

import { getAuth } from "../../utilities/utils";

import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  let token = getAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (token) {
        navigate("/dashboard");
      } else {
        navigate("/startup");
      }
    };
  });

  return (
    <div className="loading-container">
      <span className="loading-main">
        <span className="loading-inner"></span>
      </span>
    </div>
  );
};

export default Landing;
