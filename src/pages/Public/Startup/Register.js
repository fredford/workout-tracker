// Library imports
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdCreate } from "react-icons/md";

// Local component imports
import Page from "../../../components/Layout/Page/Page";
import BasicCard from "../../../components/Cards/BasicCard";
import Form from "../../../components/Forms/Form";
import Button from "../../../components/Buttons/Button";

// Utilities
import AuthService from "../../../services/AuthService";

/**
 * Component to display the registration page and perform a user registration
 * to the application.
 *
 * Status: complete
 */
const Register = () => {
  // React hooks
  let navigate = useNavigate();
  //State variables for storing user registration information
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Check if enough information is provided to attempt a valid registration
  let isDisabled = !(
    email.length !== 0 &&
    password.length !== 0 &&
    name.length !== 0 &&
    passwordConfirm.length !== 0
  );

  // If the user is already authenticated redirect them to their dashboard
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/dashboard");
    }
  }, []);

  // Placeholder information and form items
  const items = [
    {
      label: "Name",
      type: "text",
      placeholder: "John Smith",
      onChange: setName,
      required: true,
      value: name,
    },
    {
      label: "Email",
      type: "email",
      placeholder: "email@mail.com",
      onChange: setEmail,
      required: true,
      value: email,
    },
    {
      label: "Password",
      type: "password",
      placeholder: "******",
      onChange: setPassword,
      required: true,
      value: password,
    },
    {
      label: "Confirm Password",
      type: "password",
      placeholder: "******",
      onChange: setPasswordConfirm,
      required: true,
      value: passwordConfirm,
    },
  ];

  // Function to attempt a user registration given the provided information
  const attemptRegister = async (e) => {
    e.preventDefault();

    // Final check if the two passwords provided match
    if (password !== passwordConfirm) {
      setPassword("");
      setPasswordConfirm("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }
    // Make an API POST request for a registration to create an account
    AuthService.postRegister(name, email, password)
      .then((response) => {
        // If a registration is confirmed a token is provided
        localStorage.setItem("authToken", response.data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        // If a registration is denied an error is provided
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <Page center>
      <BasicCard className="startup-sizing">
        <div className="d-flex flex-column align-items-center text-normal">
          <h1 className="startup-header text-center">Fitrak</h1>
          <h3 className="basic-card__title text-muted">Register</h3>
          <hr className="basic-bar" />

          {items.map((item, index) => {
            return (
              <Form key={index} className="mb-3 w-100">
                <Form.Label>{item.label}</Form.Label>
                <Form.Input
                  type={item.type}
                  placeholder={item.placeholder}
                  onChange={item.onChange}
                  value={item.value}
                  autoComplete="off"
                  required={item.required}
                />
              </Form>
            );
          })}
          <p className="text-error">{error}</p>
          <Button
            Icon={MdCreate}
            iconSize={25}
            onClick={attemptRegister}
            disabled={isDisabled}
            fill
          >
            Register
          </Button>
          <hr className="basic-bar" />
          <p className="text-normal">
            Already registered? <Link to={{ pathname: "/login" }}> Sign in</Link>
          </p>
        </div>
      </BasicCard>
    </Page>
  );
};

export default Register;
