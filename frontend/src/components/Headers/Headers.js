
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import './header.css';

const Headers = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./images/logo.jpeg" alt="Dubai" className="dubai-image fw-6 fs-15 ls-1" />

        <NavLink to="/homepage" className="nav-link dubai-text">
          <h5>FIND DUBAI</h5>
        </NavLink>
      </div>
      <div className="navbar-right">
        <NavLink to="/homepage" className="nav-link dubai-text">
          HOME
        </NavLink>
        <NavLink to="/about" className="nav-link dubai-text">
          ABOUT
        </NavLink>
        <NavLink to="/login" className="nav-link dubai-text ">
          LOGIN
        </NavLink>
        <NavLink to="/signup" className="nav-link dubai-text">
          SIGNUP
        </NavLink>

      </div>
    </nav>
  );
}

export default Headers;

