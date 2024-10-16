import ProfileContainer from "../../components/profileContainer/ProfileContainer";
import React from 'react';

const ProfilePage = ({ setLoggedUser, setIsLoggedIn, loggedUser }) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileContainer loggedUser={loggedUser}/>
    </div>
  );
};

export default ProfilePage;