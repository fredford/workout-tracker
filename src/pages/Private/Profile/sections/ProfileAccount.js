import React from "react";
import ChangePassword from "../components/ChangePassword";
import ChangeUsername from "../components/ChangeUsername";
import DeleteAccount from "../components/DeleteAccount";
import ProfileLogout from "../components/ProfileLogout";

const ProfileAccount = () => {
  return (
    <div className="grid-300">
      <ChangeUsername />
      <ChangePassword />
      <DeleteAccount />
      <ProfileLogout />
    </div>
  );
};

export default ProfileAccount;
