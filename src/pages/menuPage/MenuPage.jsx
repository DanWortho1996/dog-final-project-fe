import React from 'react'
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="box-container">
      <button className="boxOne">Active Users</button>
      <button className="boxTwo">Dog Events</button>
      <button className="boxThree">Update Profile</button>
      <button className="boxFour">HELP</button>
    </div>
  )
};

export default MenuPage;