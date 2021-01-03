import React, { useState } from "react";
import { Redirect, useHistory, NavLink } from "react-router-dom";
import { login } from "../../services/auth";
import Modal from "react-modal";

import "./loginForm.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "480px",
    width: "384px",
    borderRadius: "20px",
  },
};

Modal.setAppElement("#root");

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  //* Login functions
  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <button onClick={openModal}>Login</button>
      <Modal
        isOpen={showModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login Modal"
      >
        <div className="modal-login-container">
          <div className="sign-in-register">
            <div>
              <h2 className="sign-in-header-text">Sign in</h2>
            </div>
            <div className="link-to-sign-up">
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Register
              </NavLink>
            </div>
          </div>
          <form onSubmit={onLogin} className="modal-login-form">
            <div>
              {errors.map((error) => (
                <div className="login-error-div">{error}</div>
              ))}
            </div>
            <div className="email">
              <label htmlFor="email">Email address</label>
            </div>
            <div>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
            </div>
            <div className="password-input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <button className="modal-login-button" type="submit">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginForm;
