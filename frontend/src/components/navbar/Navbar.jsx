import React from 'react';
import './navbar.css';
//import Menu from '../../assets/menu.png'; // Assuming this path is correct
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Swift</span>
        <span className="logo-highlight">Go</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rides">Rides</Link></li>
        <li><Link to="/drive">Drive</Link></li>
        <li><Link to="/food">Food</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="navbar-right">
        <Link to="/login" className="login-button">Log in</Link>
        <Link to="/signup" className="signup-button">Sign up</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
