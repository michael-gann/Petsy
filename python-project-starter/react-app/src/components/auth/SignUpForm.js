import React, { useState } from "react";
<<<<<<< HEAD
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from '../../services/auth';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [modalIsOpen, setIsOpen] = useState(true);

  //* Modal Functions
  function closeModal() {
    setIsOpen(false);
    return history.push('/')
  };

  //* Signup functions
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, email, password);
=======
import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
>>>>>>> db-models
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

<<<<<<< HEAD
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
=======
  const updateUsername = (e) => {
    setUsername(e.target.value);
>>>>>>> db-models
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
<<<<<<< HEAD
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Create your account</h2>
      <h3>Registration is easy.</h3>
      <form onSubmit={onSignUp}>
        <div>
          <label>First Name</label>
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
        </div>
        <div>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button type="submit">Register</button>
      </form>
    </Modal>
=======
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
>>>>>>> db-models
  );
};

export default SignUpForm;
