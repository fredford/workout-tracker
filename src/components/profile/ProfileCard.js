import { useSelect } from "@mui/base";
import { FormControlLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import StandardCard from "../cards/StandardCard";

import { updateUser } from "../../redux/reducers/user";

import { MaterialUISwitch } from "../MUIComponents/MaterialUISwitch";

const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  var checked = user.theme === "light" ? false : true;

  const changeUser = (type, change) => {
    var newUser = Object.assign({}, user);

    newUser["name"] = newName;
    newUser["password"] = newPassword;

    if (type === "theme") {
      newUser["theme"] = change;
    } else {
      newUser["theme"] = "";
    }

    setNewName("");
    setNewPassword("");

    dispatch(updateUser(newUser));
  };

  const buttonName = () => {
    if (editName) {
      changeUser("name");
    } else {
      setNewName(user.name);
    }
    setEditName(!editName);
  };

  const buttonPassword = () => {
    if (editPassword) {
      changeUser("password");
    }
    setEditPassword(!editPassword);
  };

  const buttonTheme = () => {
    var changeTheme = user.theme === "light" ? "dark" : "light";

    changeUser("theme", changeTheme);
  };

  return (
    <StandardCard title="Profile" className="profile__user">
      <p className="text-muted">Display Name</p>
      <div className="profile__user-form">
        {editName ? (
          <input
            id="name"
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <p>{user.name}</p>
        )}
        <input
          id="input-name"
          type="checkbox"
          checked={editName}
          onChange={buttonName}
        />
        <label id="label-name" htmlFor="input-name">
          Edit
        </label>
      </div>
      <p className="text-muted mt-3">Email</p>
      <div className="profile__user-form mb-3">
        <p>{user.email}</p>
      </div>
      <p className="text-muted mt-3">Password</p>
      <div className="profile__user-form">
        {editPassword ? (
          <input
            id="password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        ) : (
          <p>•••••••</p>
        )}

        <input
          id="input-password"
          type="checkbox"
          checked={editPassword}
          onChange={buttonPassword}
        />
        <label id="label-password" htmlFor="input-password">
          Edit
        </label>
      </div>
      <p className="text-muted mt-3">Theme</p>
      <div className="profile__user-form">
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} checked={checked} />}
          sx={{
            marginLeft: "-1rem",
            padding: 0,
            backgroundColor: "theme.palette.background.paper",
          }}
          onChange={buttonTheme}
          label=""
        />
      </div>
    </StandardCard>
  );
};

export default ProfileCard;
