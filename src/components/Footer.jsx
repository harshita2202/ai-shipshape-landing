import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-left">
          <img src="/logoColor.png" alt="AiShipShape Logo" className="footer-logo" />
          <div className="footer-section">
            <h4>Address:</h4>
            <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
          </div>
          <div className="footer-section">
            <h4>Contact:</h4>
            <a href="tel:18001234567">1800 123 4567</a><br />
            <a href="mailto:info@aishipshape.com">info@aishipshape.com</a>
          </div>
          <div className="footer-socials">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" /></a>
          </div>
        </div>

        {/* Right Columns */}
        <div className="footer-right">
          <div className="footer-links">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Events</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 AiShipShape. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
