import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 PawPals. All rights reserved.</p>
      <nav className="footer-nav">
        <ul>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default footer;