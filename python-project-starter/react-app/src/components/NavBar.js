import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';

const NavBar = ({ setAuthenticated, isAuthenticated }) => {
  return (
    <nav className="nav navbar-container">
      <ul className="nav navbar-items">
        <li className="nav navbar-item">
          <NavLink to="/" exact={true} activeClassName="active">
            Petsy
          </NavLink>
        </li>
        <input type="text" placeholder="Search for anything"></input>
        {!isAuthenticated &&
          <>
            <li className="nav navbar-item">
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
          </NavLink>
            </li>
            <li className="nav navbar-item">
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
          </NavLink>
            </li>
          </>}
      </ul>
      {isAuthenticated &&
        <div class="dropdown">
          <button class="dropbtn">You
          <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <LogoutButton setAuthenticated={setAuthenticated} />
          </div>
        </div>}
    </nav>
  );
}

export default NavBar;
