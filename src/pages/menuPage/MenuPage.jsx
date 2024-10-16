import React from 'react';
import {useNavigate} from 'react-router-dom';
import "./MenuPage.css";
import DogBreedsMenu from '../../components/menuContainer/MenuContainer';

const MenuPage = () => {
  const navigate = useNavigate();
  return (
    <div className="menuWrapper">
    <div className="box-container">
      <button className="boxOne" onClick={() => navigate("/activeusers")}>Active Users</button>
      <button className="boxTwo" onClick={() => navigate("/dogevents")}>Dog Events</button>
      <button className="boxThree" onClick={() => navigate("/profilepage")}>Update Profile</button>
      {/* <button className="boxFour" onClick={() => navigate("/help")}>HELP</button> */}
    </div>
    <div className="dog-breeds-container">
    <DogBreedsMenu />  
  </div>
</div>
  )
};

export default MenuPage;