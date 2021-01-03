import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../services/auth";
import Modal from "react-modal";

import "./SignUpForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "700px",
    width: "384px",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  //* Modal Functions
  function openModal() {
    setShowModal(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setShowModal(false);
  }

  //* Signup functions
  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(firstName, lastName, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
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
    <>
      <button onClick={openModal}>Sign up</button>
      <Modal
        closeTimeoutMS={500}
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sign up Modal"
      >
        <div className="sign-up-modal-container">
          <div className="intro-text">
            <h2>Create your account</h2>
            <h3>Registration is easy.</h3>
          </div>
          <form className="sign-up-form" onSubmit={onSignUp}>
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
            <div className="password-input-field">
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
        </div>
      </Modal>
    </>
  );
};

export default SignUpForm;
