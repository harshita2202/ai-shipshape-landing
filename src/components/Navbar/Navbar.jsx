import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header style={{ position: "relative", zIndex: 10 }}>
      <nav className="navbar-container">
        <img src="/logo.png" alt="AiShipshape Logo" className="logo" />

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="dropdown">
  <a href="#">Services <span className="arrow">▼</span></a>
</li>

        </ul>
        <button className="join-btn">Join</button>
      </nav>
    </header>
  );
}

export default Navbar;
