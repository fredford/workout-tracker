import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Page from "../../components/utility/Page";

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
    <Page>
      <Page.Body className="center-page">
        <Card
          title="Change Username"
          subtitle="Set your new username"
          className="p-3"
        >
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
                className="btn btn-success mt-3 w-100"
                onClick={() => changeUsername}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-danger mt-3 w-100"
                onClick={() => navigate("/message/usernamecancel")}
              >
                Cancel
              </button>
            </div>
          </div>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default ChangeUsername;
