import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
 
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault()
    console.log ("clicked")
    navigate('/'); 
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src="../../../images/one.png" alt="one" className="one" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search PawPals..." />
      </div>
      <div className="nav-icons">
        <span className="welcome-message">Welcome, User!</span>
        <a href="/home" className="icon-link">
          <img src="../../../images/images.png" alt="Images" className="icon" />
        </a>
        <a href="/images" className="icon-link">
          <img src="../../../images/home.png" alt="Home" className="icon" />
        </a>
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
    </header>
  );
};
 
export default Header;