import React from "react";

import ProfileWeight from "./ProfileWeight";
import ProfileTheme from "./ProfileTheme";
import ProfileDistance from "./ProfileDistance";
import Section from "../../../../components/Misc/Section";

const ProfileSettings = () => {
  return (
    <Section>
      <Section.Header>Settings</Section.Header>
      <Section.Body>
        <div className="row">
          <div className="col-md-4 col-xs-12 card-margin">
            <ProfileWeight />
          </div>
          <div className="col-md-4 col-xs-12 card-margin">
            <ProfileDistance />
          </div>
          <div className="col-md-4 col-xs-12 card-margin">
            <ProfileTheme />
          </div>
        </div>
      </Section.Body>
    </Section>
  );
};

export default ProfileSettings;
