import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import Button from "../../../../components/Buttons/Button";
import ButtonImage from "../../../../components/Buttons/ButtonImage";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const DeleteAccount = () => {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  const updateUsername = (e) => {
    setUsername(e);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var isDisabled = true;

  if (username === user.name) {
    isDisabled = false;
  }

  const handleSubmit = () => {
    // TODO handle deleting user account
  };

  return (
    <>
      <ButtonImage onClick={handleShow}>
        <ButtonImage.Image src="./delete.png" />
        <ButtonImage.Text>Delete Account</ButtonImage.Text>
      </ButtonImage>
      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Body>
            <Card.Title>Delete Account</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Enter your username to delete account
            </Card.Subtitle>
            <Form className="mb-3">
              <Form.Label>
                Your username is: <span className="fw-bold"> {user.name}</span>
              </Form.Label>
              <Form.Input
                type="text"
                id="username"
                placeholder={user.name}
                value={username}
                onChange={updateUsername}
                autoComplete={"off"}
                required
              ></Form.Input>
            </Form>
            <div className="row">
              <div className="col">
                <Button onClick={handleSubmit} disabled={isDisabled}>
                  Delete
                </Button>
              </div>
              <div className="col">
                <Button onClick={handleClose} className="btn-danger">
                  Cancel
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
};

export default DeleteAccount;
