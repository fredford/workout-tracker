import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

const ProfilePicture = () => {
  const [image, setImage] = useState();
  const uploadFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }

    // TODO upload photo to user profile
  };
  return (
    <ProfileCard>
      <div className="d-flex flex-column align-items-center">
        <input
          className="form-control profile-picture__form"
          type="file"
          id="formFile"
          onChange={uploadFile}
        />
      </div>
    </ProfileCard>
  );
};

export default ProfilePicture;
