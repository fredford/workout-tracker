import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/cards/Card";
import Page from "../Page/Page";

const DeleteAccount = () => {
  const navigate = useNavigate();
  return (
    <Page title="Delete Account">
      <div className="d-flex h-100 justify-content-center align-items-center">
        <Card className="d-flex flex-column">
          <p>Are you sure you want to delete your account?</p>

          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-success mt-3 w-100"
                onClick={() => navigate("/message/deletesuccess")}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-danger mt-3 w-100"
                onClick={() => navigate("/message/deletecancel")}
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

export default DeleteAccount;
