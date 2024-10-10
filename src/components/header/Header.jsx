import React from 'react';
import './Header.css';
 
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/src/assets/Instadog.png" alt="Instadog Logo" className="logo" />
      </div>
     
      <div className="search-bar">
        <input type="text" placeholder="Search Instadog..." />
      </div>
     
      <div className="nav-icons">
        <span className="welcome-message">Welcome, User!</span>
        <a href="/home" className="icon-link">
          <img src="/src/assets/images.png" alt="Images" className="icon" />
        </a>
        <a href="/images" className="icon-link">
          <img src="/src/assets/home.png" alt="Home" className="icon" />
        </a>
      </div>
    </header>
  );
};
 
export default Header;