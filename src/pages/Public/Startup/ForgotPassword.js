// Library imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Local component imports
import Button from "../../../components/Buttons/Button";
import BasicCard from "../../../components/Cards/BasicCard";
import Form from "../../../components/Forms/Form";
import Page from "../../../components/Layout/Page/Page";
// Services
import AuthService from "../../../services/AuthService";
// Utilities
import { isValidEmail } from "../../../utilities/utils";

/**
 * Page to allow the User to request a password reset
 */
const ForgotPassword = () => {
  // Component state variables for email and if the email is valid
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  // React hooks
  const navigate = useNavigate();

  // Function to update and validate the email provided
  const updateEmail = (e) => {
    setEmail(e);
    setIsValid(isValidEmail(e));
  };

  // Function to send a request for a password reset
  const attemptRequest = async () => {
    AuthService.postForgot(email)
      .then((response) => {
        navigate("/message/forgotsuccess");
      })
      .catch((error) => {
        navigate("/message/forgotfail");
      });
  };

  return (
    <Page center>
      <BasicCard>
        <div className="d-flex flex-column align-items-center">
          <h1 className="startup-header text-center text-normal">Fitrak</h1>
          <h3 className="basic-card__title text-muted">Forgot Password</h3>
          <hr className="basic-bar" />
          <p className="text-normal"></p>
          <Form className="w-100">
            <Form.Label for="forgot-email">Provide your account email to reset password</Form.Label>
            <Form.Input
              id="forgot-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={updateEmail}
            />
          </Form>
          <Button onClick={attemptRequest} disabled={!isValid} className=" mt-3 w-100">
            Reset Password
          </Button>
        </div>
      </BasicCard>
    </Page>
  );
};

export default ForgotPassword;
