// Library imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";

// Local component imports
import Page from "../../../components/Layout/Page/Page";
import BasicCard from "../../../components/Cards/BasicCard";
import Form from "../../../components/Forms/Form";
import Button from "../../../components/Buttons/Button";

// Utilities
import AuthService from "../../../services/AuthService";

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
  let isDisabled = !(email.length !== 0 && password.length !== 0);

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
    <Page center>
      <BasicCard>
        <div className="d-flex flex-column align-items-center">
          <h1 className="startup-header text-center text-normal">Fitrak</h1>
          <h3 className="basic-card__title text-muted">Login</h3>
          <hr className="basic-bar" />
          <Form className="mb-2 w-100">
            <Form.Label for="login-email">Email</Form.Label>
            <Form.Input id="login-email" type="email" value={email} onChange={updateEmail} />
          </Form>
          <Form className="mb-3 w-100">
            <Form.Label for="login-password">Password</Form.Label>
            <Form.Input
              id="login-password"
              type="password"
              value={password}
              onChange={updatePassword}
            />
          </Form>
          <p className="text-error">{error}</p>
          <Button Icon={MdLogin} iconSize={25} onClick={attemptLogin} disabled={isDisabled} fill>
            Login
          </Button>
          <hr className="basic-bar" />
          <div className="d-flex justify-content-between">
            <Link className="me-5" to={{ pathname: "/forgotpassword" }}>
              Forgot Password?
            </Link>
            <Link to={{ pathname: "/register" }}>Create an account</Link>
          </div>
        </div>
      </BasicCard>
    </Page>
  );
};

export default Login;
