import React, { useState, useEffect } from "react";

import Card from "../../components/cards/Card";

import { getData, updateData } from "../../services/utils";

const ProfileCard = () => {
  const [user, setUser] = useState({});
  const [editName, setEditName] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const [newName, setNewName] = useState("");
  const [newPassword, setNewPassword] = useState("");

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

  const updateUser = () => {
    updateData("api/v1/profile", { name: newName, password: newPassword }).then(
      (response) => {
        setUser(response.data);
      }
    );
  };

  const buttonName = () => {
    if (editName) {
      updateUser();
    } else {
      setNewName(user.name);
    }
    setEditName(!editName);
  };

  const buttonPassword = () => {
    if (editPassword) {
      updateUser();
    }
    setEditPassword(!editPassword);
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
      <p className="text-muted">Password</p>
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
    </Card>
  );
};

export default ProfileCard;
