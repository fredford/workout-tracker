import React from "react";

export default function SideBarProfile({ profile }) {
  var profileLink = `profile/${profile.link}`;
  var profileImage = `../${profile.image}`;
  return (
    <a className="sidebar__profile row" href={profileLink}>
      <img
        className="sidebar__profile-image"
        src={profileImage}
        alt="profile"
      />
      <h4>{profile.name}</h4>
    </a>
  );
}
