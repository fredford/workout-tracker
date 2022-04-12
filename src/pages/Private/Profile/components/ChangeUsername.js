import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import ButtonImage from "../../../../components/Buttons/ButtonImage";
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

const ChangeUsername = () => {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");

  const updateUsername = (e) => {
    setUsername(e);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  var isDisabled = true;

  if (username.length) {
    isDisabled = false;
  }

  const handleUpdateUsername = () => {
    // TODO update the username in the database
  };

  return (
    <>
      <ButtonImage onClick={handleShow}>
        <ButtonImage.Image src="./displayname.png" />
        <ButtonImage.Text>Change Username</ButtonImage.Text>
      </ButtonImage>
      <Modal show={show} onHide={handleClose}>
        <Card>
          <Card.Body>
            <Card.Title>Change Username</Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Set your new username
            </Card.Subtitle>
            <Form className="mb-3">
              <Form.Label>New Username</Form.Label>
              <Form.Input
                type="text"
                id="username"
                placeholder={user.name}
                value={username}
                onChange={updateUsername}
                required
              ></Form.Input>
            </Form>
            <div className="row">
              <div className="col">
                <Button onClick={handleUpdateUsername} disabled={isDisabled}>
                  Update
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

export default ChangeUsername;
