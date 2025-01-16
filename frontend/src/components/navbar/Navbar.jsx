import React from 'react';
import './navbar.css';
//import Menu from '../../assets/menu.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Swift</span>
        
        <span className="logo-highlight">Go</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#ride">Ride</a></li>
        <li><a href="#drive">Drive</a></li>
        <li><a href="#food">Food</a></li>
        <li><a href="#about">About Us</a></li>
       
      </ul>
      <div className="navbar-right">
       
        <a href="#login" className="login-button">Log in</a>
        <a href="#signup" className="signup-button">Sign up</a>
        
        
      </div>
      
    </nav>
  );
}

export default Navbar;
