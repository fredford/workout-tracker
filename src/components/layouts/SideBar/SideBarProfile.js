import React, { useEffect, useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { getData } from "../../../services/utils";

export default function SideBarProfile({ profile }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/login");
    }

    retrieveUser();
  }, []);

  const retrieveUser = () => {
    getData("api/v1/profile")
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  var userLink = `profile/${user._id}`;

  return (
    <a className="sidebar__profile row" href={userLink}>
      <h4>{user.name}</h4>
    </a>
  );
}
