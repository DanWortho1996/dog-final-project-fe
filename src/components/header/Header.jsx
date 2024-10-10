import React from 'react';
import './Header.css'; 

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>PawPals</h1>
        <div className="logo-container">
        <img src="/src/components/images/logo1.png" alt="logo1 Logo" className="logo1" />
      </div>
      </div>
      <nav className="nav">
        <ul>
          <li><button className="nav-btn">Home</button></li>
          <li><button className="nav-btn">About</button></li>
          <li><button className="nav-btn">Services</button></li>
          <li><button className="nav-btn">Contact</button></li>
        </ul>
      </nav>
      <button className="logout-btn" onClick={onLogout}>Log Out</button>
    </header>
  );
};

export default Header;