import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="ellipse-bg"></div>
      <img src="/logo.png" alt="AiShipshape Logo" className="logo" />
      
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Services</a></li>
      </ul>

      <button className="login-btn">Join</button>
    </nav>
  );
}

export default Navbar;
