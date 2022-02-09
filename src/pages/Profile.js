import React, { useEffect, useState } from "react";

import { getData } from "../services/utils";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
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

  return <div>{user.name}</div>;
};

export default Profile;
