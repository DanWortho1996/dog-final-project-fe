import ProfileContainer from "../../components/profileContainer/ProfileContainer";
import React from 'react';


const ProfilePage = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {


  return (
    <div className="profile-delete">
      
      <ProfileContainer loggedUser={loggedUser} setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>
    </div>
  );
};


export default ProfilePage;