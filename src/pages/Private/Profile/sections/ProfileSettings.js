import React from "react";

import ProfileWeight from "../components/ProfileWeight";
import ProfileTheme from "../components/ProfileTheme";
import ProfileDistance from "../components/ProfileDistance";

const ProfileSettings = () => {
  return (
    <div className="grid-300">
      <ProfileWeight />
      <ProfileDistance />
      <ProfileTheme />
    </div>
  );
};

export default ProfileSettings;
