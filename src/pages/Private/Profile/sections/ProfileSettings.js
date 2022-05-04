import React from "react";

import ProfileWeight from "../components/ProfileWeight";
import ProfileTheme from "../components/ProfileTheme";
import ProfileDistance from "../components/ProfileDistance";
import Section from "../../../../components/Misc/Section";

const ProfileSettings = () => {
  return (
    <Section>
      <Section.Header>Settings</Section.Header>
      <Section.Body>
        <div className="grid-150">
          <ProfileWeight />
          <ProfileDistance />
          <ProfileTheme />
        </div>
      </Section.Body>
    </Section>
  );
};

export default ProfileSettings;
