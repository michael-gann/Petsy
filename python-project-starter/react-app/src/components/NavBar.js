import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
<<<<<<< HEAD
import './NavBar.css';

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav className="nav navbar-container">
      <ul className="nav navbar-items">
        <li className="nav navbar-item">
          <NavLink to="/" exact={true} activeClassName="active">
            Petsy
          </NavLink>
        </li>
        <input type="text" placeholder="Search for anything"></input>
        <li className="nav navbar-item">
=======

const NavBar = ({ setAuthenticated }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
>>>>>>> db-models
          <NavLink to="/login" exact={true} activeClassName="active">
            Login
          </NavLink>
        </li>
<<<<<<< HEAD
        <li className="nav navbar-item">
=======
        <li>
>>>>>>> db-models
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </li>
<<<<<<< HEAD
      </ul>
      <div class="dropdown">
        <button class="dropbtn">You
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <LogoutButton setAuthenticated={setAuthenticated} />
        </div>
      </div>
=======
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </li>
      </ul>
>>>>>>> db-models
    </nav>
  );
}

<<<<<<< HEAD
export default NavBar;
=======
export default NavBar;
>>>>>>> db-models
