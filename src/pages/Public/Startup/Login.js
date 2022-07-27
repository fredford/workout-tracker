// Library imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";

// Local component imports
import Page from "../../../components/Misc/Page";
import Card from "../../../components/Cards/Card";
import Form from "../../../components/Forms/Form";
import Button from "../../../components/Buttons/Button";

// Utilities
import AuthService from "../../../services/auth";

/**
 * Component to display the login page for the application and perform a
 * user login.
 *
 * Status: complete
 */
const Login = () => {
  // React hooks
  let navigate = useNavigate();
  // State variables for storing user input password and email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Logic to determine if a login contains an email and password
  let isDisabled = email.length !== 0 && password.length !== 0 ? false : true;

  // Function to update the input email
  const updateEmail = (e) => {
    setEmail(e);
  };

  // Function to update the input password
  const updatePassword = (e) => {
    setPassword(e);
  };

  // If the user is already authenticated redirect them to their dashboard
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, []);

  // Function to attempt a user login with the email and password
  const attemptLogin = async (e) => {
    e.preventDefault();
    // Make an API POST request for a login to retrieve web token
    AuthService.postLogin(email, password)
      .then((response) => {
        localStorage.setItem("authToken", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <Page>
      <Page.Body center>
        <Card>
          <Card.Body>
            <h1 className="startup-header text-center">Fitrak</h1>
            <Card.Header className="text-center text-muted">Login</Card.Header>
            <Card.Bar />
            <Form className="mb-2">
              <Form.Label for="login-email">Email</Form.Label>
              <Form.Input
                id="login-email"
                type="email"
                value={email}
                onChange={updateEmail}
              />
            </Form>
            <Form className="mb-3">
              <Form.Label for="login-password">Password</Form.Label>
              <Form.Input
                id="login-password"
                type="password"
                value={password}
                onChange={updatePassword}
              />
            </Form>
            <Card.Text className="text-error">{error}</Card.Text>
            <Button
              onClick={attemptLogin}
              border
              horizontal
              accent
              disabled={isDisabled}
              className="w-100"
            >
              <Button.Icon>
                <MdLogin size={25} />
              </Button.Icon>
              <Button.Text>Login</Button.Text>
            </Button>
            <Card.Bar />
            <div className="d-flex justify-content-between">
              <Link className="me-5" to={{ pathname: "/forgotpassword" }}>
                Forgot Password?
              </Link>
              <Link to={{ pathname: "/register" }}>Create an account</Link>
            </div>
          </Card.Body>
        </Card>
      </Page.Body>
    </Page>
  );
};

export default Login;
