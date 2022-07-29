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

/**
 * Component that allows a user to change their username
 *
 * Status: complete
 */
const ChangeUsername = () => {
  // React hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Retrieve user object from the store
  const user = useSelector((state) => state.user);

  // State variable for the new username
  const [name, setName] = useState("");

  // Function to update the input username
  const updateName = (e) => {
    setName(e);
  };

  // If no username is provided, prevent updating the name
  var isDisabled = name.length ? false : true;

  // Function to update the Redux store and make a PUT request
  // to the server updating the username
  const handleUpdateName = async () => {
    var newUser = { ...user };

    newUser.name = name;

    try {
      await dispatch(updateUser(newUser));
      navigate("/message/usernamesuccess");
    } catch (err) {
      navigate("/message/usernamefailure");
      console.log(err);
    }
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
              id="name"
              placeholder={user.name}
              value={name}
              onChange={updateName}
              autoComplete="off"
              required
            ></Form.Input>
          </Form>

          <Button
            className="w-100"
            onClick={handleUpdateName}
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
