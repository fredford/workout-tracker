import React, { useState } from "react";
import Card from "../../components/cards/Card";
import Page from "../Page/Page";

import { useDispatch, useSelector } from "react-redux";
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
    <Page title="Change Password">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Card className="d-flex flex-column">
          <p>Set your new password (minimum 6 characters)</p>
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
                className="btn btn-outline-success mt-3 w-100"
                onClick={() => changePassword}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-danger mt-3 w-100"
                onClick={() => navigate("/message/passwordcancel")}
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

export default ChangePassword;
