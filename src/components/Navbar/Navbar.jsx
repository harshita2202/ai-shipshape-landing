import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  return (
    <header style={{ position: "relative", zIndex: 10 }}>
      <nav className="navbar-container">
        <img src="/logo.png" alt="AiShipshape Logo" className="logo" />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <button className="join-btn">Join</button>
      </nav>
    </header>
  );
}

export default Navbar;
