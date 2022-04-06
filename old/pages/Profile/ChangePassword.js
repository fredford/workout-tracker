import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Page from "../../components/utility/Page";

import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  let navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");

  var isDisabled = true;

  if (newPassword.length > 5) {
    isDisabled = false;
  }

  const changePassword = () => {
    // TODO send a request to update the password
    navigate("/message/passwordsuccess");
  };

  return (
    <Page>
      <Page.Body className="center-page">
        <Card
          className="p-3"
          title="Change Password"
          subtitle="Set your new password (minimum 6 characters)"
        >
          <div className="input-group">
            <input
              id="password"
              type="password"
              className="form-control mt-3"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                disabled={isDisabled}
                className="btn btn-success mt-3 w-100"
                onClick={() => changePassword}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-danger mt-3 w-100"
                onClick={() => navigate("/message/passwordcancel")}
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

export default ChangePassword;
