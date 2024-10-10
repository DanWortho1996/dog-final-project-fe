import React from 'react';
import './Header.css';
 
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/components/images/logo1.png" alt="1ogo1" className="logo1" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search PawPals..." />
      </div>
      <div className="nav-icons">
        <span className="welcome-message">Welcome, User!</span>
        <a href="/home" className="icon-link">
          <img src="/src/components/images/images.png" alt="Images" className="icon" />
        </a>
        <a href="/images" className="icon-link">
          <img src="/src/components/images/home.png" alt="Home" className="icon" />
        </a>
      </div>
    </header>
  );
};
 
export default Header;