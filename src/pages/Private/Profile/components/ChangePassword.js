// Library imports
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

// Redux import
import { updateUser } from "../../../../redux/reducers/user";

// Utilities
import { passwordCompare } from "../../../../services/utils";

/**
 * Component that allows a user to change their password
 *
 * Status: complete
 */
const ChangePassword = () => {
  // React hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Component state variables
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Redux store user object
  const user = useSelector((state) => state.user);

  // Function for updating the state for password
  const updatePassword = (e) => {
    setPassword(e);
  };

  // Function for updating the state for confirm password
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  // Password comparison function
  const isMatch = passwordCompare(password, confirmPassword);

  // Function to update the Redux store and make a PUT request
  // to the server updating the password
  const handleUpdatePassword = async () => {
    var newUser = { ...user };

    newUser.password = password;

    try {
      await dispatch(updateUser(newUser));
      navigate("/message/passwordsuccess");
    } catch (err) {
      navigate("/message/passwordfailure");
      console.log(err);
    }
  };

  return (
    <Card className="card-padding h-100">
      <Card.ImageHeader path="./password.png">
        <Card.Title>Change Password</Card.Title>
        <Card.Text className="text-muted">
          Set your new password (minimum 6 characters)
        </Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
          <Form className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Input
              type="password"
              id="password"
              placeholder="******"
              value={password}
              onChange={updatePassword}
              autoComplete="false"
              required
            ></Form.Input>
          </Form>
          <Form className="mb-3">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Input
              type="password"
              id="newpassword"
              placeholder="******"
              value={confirmPassword}
              onChange={updateConfirmPassword}
              autoComplete="false"
              required
            ></Form.Input>
          </Form>

          <Button
            className="w-100"
            onClick={handleUpdatePassword}
            disabled={!isMatch}
            border
            accent
          >
            <Button.Text>Update</Button.Text>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChangePassword;
