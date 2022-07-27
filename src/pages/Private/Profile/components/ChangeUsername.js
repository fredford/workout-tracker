// Library imports
import React, { useState } from "react";
import { useSelector } from "react-redux";

// Local component imports
import Button from "../../../../components/Buttons/Button";
import Card from "../../../../components/Cards/Card";
import Form from "../../../../components/Forms/Form";

/**
 * Component that allows a user to change their username
 *
 * Status: in-progress, in-use
 */
const ChangeUsername = () => {
  // Retrieve user object from the store
  const user = useSelector((state) => state.user);

  // State variable for the new username
  const [username, setUsername] = useState("");

  // Function to update the input username
  const updateUsername = (e) => {
    setUsername(e);
  };

  var isDisabled = true;

  // If no username is provided, prevent updating the name
  if (username.length) {
    isDisabled = false;
  }
  // Function to make an API call updating the username
  const handleUpdateUsername = () => {
    // TODO Update the username in the database for a name change
  };

  return (
    <Card className="h-100">
      <Card.ImageHeader path="./scale.png">
        <Card.Title>Change Username</Card.Title>
        <Card.Text className="text-muted">Set your new username</Card.Text>
      </Card.ImageHeader>
      <Card.Body className="pb-0 mt-3">
        <div className="profile-settings-card">
          <Form className="mb-3">
            <Form.Input
              type="text"
              id="username"
              placeholder={user.name}
              value={username}
              onChange={updateUsername}
              autoComplete="off"
              required
            ></Form.Input>
          </Form>

          <Button
            className="w-100"
            onClick={handleUpdateUsername}
            disabled={isDisabled}
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

export default ChangeUsername;
