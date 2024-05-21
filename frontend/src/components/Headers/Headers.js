
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import './header.css';

const Headers = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className='navbar-left'>
        <Link className="title">
          <img src="./images/logo.jpeg" alt="Dubai" className="dubai-image fw-6 fs-15 ls-1" />
        </Link>
        <NavLink to="/homepage" className="nav-link dubai-text">
          <h5>FIND DUBAI</h5>
        </NavLink>

      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/homepage" className="nav-link dubai-text">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link dubai-text">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-link dubai-text ">
            LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="nav-link dubai-text">
            SIGNUP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Headers;