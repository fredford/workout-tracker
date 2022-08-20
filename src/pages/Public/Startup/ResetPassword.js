// Library imports
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Local component imports
import Button from "../../../components/Buttons/Button";
import Card from "../../../components/Cards/Card";
import Form from "../../../components/Forms/Form";
import Page from "../../../components/Layout/Page/Page";
// Services
import AuthService from "../../../services/AuthService";
import { passwordCompare } from "../../../utilities/utils";

/**
 * Page to allow the User to request a password reset
 */
const ResetPassword = () => {
  // Component state variables for password and if the password is valid
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // React hooks
  const navigate = useNavigate();

  // Get reset token from URL
  const { resetToken } = useParams();

  // Function to update and validate the password provided
  const updatePassword1 = (e) => {
    setPassword1(e);
  };

  // Function to update and validate the confirm password
  const updatePassword2 = (e) => {
    setPassword2(e);
  };

  // Password security
  let isValid = passwordCompare(password1, password2);

  // Function to send a request for a password reset
  const attemptRequest = async () => {
    AuthService.postReset(resetToken, password1)
      .then((response) => {
        navigate("/message/resetsuccess");
      })
      .catch((error) => {
        navigate("/message/resetfailure");
      });
  };

  return (
    <Page center>
      <Card>
        <Card.Body>
          <h1 className="startup-header text-center text-normal">Fitrak</h1>
          <Card.Header className="text-center text-muted">Reset Password</Card.Header>
          <Card.Bar />
          <p className="text-normal"></p>
          <Form>
            <Form.Label for="forgot-password1">Provide a new password</Form.Label>
            <Form.Input
              id="forgot-password1"
              type="password"
              placeholder="******"
              value={password1}
              onChange={updatePassword1}
            />
          </Form>
          <Form className="mt-3">
            <Form.Label for="forgot-password2">Confirm the new password</Form.Label>
            <Form.Input
              id="forgot-password2"
              type="password"
              placeholder="******"
              value={password2}
              onChange={updatePassword2}
            />
          </Form>
          <Button onClick={attemptRequest} disabled={!isValid} className="mt-3 w-100">
            Reset Password
          </Button>
        </Card.Body>
      </Card>
    </Page>
  );
};

export default ResetPassword;
