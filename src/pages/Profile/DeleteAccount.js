import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../components/cards/Card";
import Page from "../../components/utility/Page";

const DeleteAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // TODO handle DELETE request to server
    navigate("/message/deletesuccess");
  };

  return (
    <Page>
      <Page.Body className="center-page">
        <Card
          className="p-3"
          title="Delete Account"
          subtitle="Are you sure you want to delete your account?"
        >
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-success mt-3 w-100"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-danger mt-3 w-100"
                onClick={() => navigate("/message/deletecancel")}
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

export default DeleteAccount;
