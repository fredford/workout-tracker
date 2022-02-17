import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../components/cards/Card";

import { updateUser } from "../../redux/reducers/user";
import { ThemeContext } from "../../contexts/themeContext";

const ProfileCard = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editName, setEditName] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [theme, setTheme] = useContext(ThemeContext);

  const [checked, setChecked] = useState(theme === "light" ? false : true);

  const changeUser = (type, change) => {
    var newUser = Object.assign({}, user);

    newUser["name"] = newName;
    newUser["password"] = newPassword;

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

  const buttonTheme = (e) => {
    var oldTheme = localStorage.getItem("theme");
    var newTheme = oldTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    setChecked(!checked);
  };

  return (
    <Card title="Profile" className="profile__user">
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
        <input
          id="input-theme"
          type="checkbox"
          checked={checked}
          onChange={buttonTheme}
        />
        <label htmlFor="input-theme" className="label-theme">
          <span className="dark-mode" />
          <span className="light-mode" />
          <div className="theme-slider"></div>
        </label>
      </div>
    </Card>
  );
};

export default ProfileCard;
