import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Page from "../Page/Page";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChangeUsername = () => {
  let navigate = useNavigate();

  const [newUsername, setNewUsername] = useState("");

  var isDisabled = true;

  if (newUsername.length > 0) {
    isDisabled = false;
  }

  const changeUsername = () => {
    // TODO send request to update the username
    navigate("/message/usernamesuccess");
  };

  return (
    <Page title="Change Username">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Card className="d-flex flex-column">
          <p>Set your new username</p>
          <div className="input-group">
            <input
              id="username"
              type="username"
              className="form-control mt-3"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                disabled={isDisabled}
                className="btn btn-outline-success mt-3 w-100"
                onClick={() => changeUsername}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-danger mt-3 w-100"
                onClick={() => navigate("/message/usernamecancel")}
              >
                Cancel
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
};

export default ChangeUsername;
