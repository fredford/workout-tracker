import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const ChangePassword = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePassword = (e) => {
    setPassword(e);
  };
  const updateConfirmPassword = (e) => {
    setConfirmPassword(e);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var isDisabled = true;

  if (
    password.length > 5 &&
    confirmPassword.length > 5 &&
    password === confirmPassword
  ) {
    isDisabled = false;
  }

  return (
    <>
      <Button onClick={handleShow} className="pt-5 pb-5">
        Change Password
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Body>
            <Card.Title>Change Password</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Set your new password (minimum 6 characters)
            </Card.Subtitle>
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
            <div className="row">
              <div className="col">
                <Button onClick={() => {}} disabled={isDisabled}>
                  Update
                </Button>
              </div>
              <div className="col">
                <Button onClick={handleClose}>Cancel</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
};

export default ChangePassword;
