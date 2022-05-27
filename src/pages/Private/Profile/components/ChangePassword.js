import React, { useState } from "react";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePassword = (e) => {
    setPassword(e);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  var isDisabled = true;

  if (
    password.length > 5 &&
    confirmPassword.length > 5 &&
    password === confirmPassword
  ) {
    isDisabled = false;
  }

  const handleUpdatePassword = () => {
    // TODO update the user password in the database
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
        <div calssName="profile-settings-card">
          <Form className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Input
              type="password"
              id="password"
              placeholder="******"
              value={password}
              onChange={updatePassword}
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
              required
            ></Form.Input>
          </Form>

          <Button
            className="w-100"
            onClick={handleUpdatePassword}
            disabled={isDisabled}
          >
            <Button.Text>Update</Button.Text>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChangePassword;
