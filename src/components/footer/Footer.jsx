import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 PawPals. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Support</li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;