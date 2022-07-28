import React, { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";
import api from "../../../../services/sendRequest";
import UserService from "../../../../services/user";
import { passwordCompare } from "../../../../services/utils";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [data, setData] = useState(null);

  const updatePassword = (e) => {
    setPassword(e);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  // Password comparison function
  const isMatch = passwordCompare(password, confirmPassword);

  const handleUpdatePassword = async () => {
    // TODO change this to an update function in the API
    const [data, error] = await api.fetch(UserService.getUser());
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
