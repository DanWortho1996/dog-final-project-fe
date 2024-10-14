import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <div className="box-container">
      <button className="boxOne" onClick={() => navigate("/userlist")}>Active Users</button>
      <button className="boxTwo">Dog Events</button>
      <button className="boxThree">Update Profile</button>
      <button className="boxFour">HELP</button>
    </div>
  )
};

export default MenuPage;