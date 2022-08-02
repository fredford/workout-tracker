// Library imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Utilities
import { getAuth } from "../../services/utils";


/**
 * Component to show a loading icon
 * @returns {JSX.Element}
 * @constructor
 *
 * Status: completed
 */
const Loading = () => {
  // React hooks
  let navigate = useNavigate();
  // Component state
  const [show, setShow] = useState(true);
  // Retrieve auth token
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

export default Loading;
