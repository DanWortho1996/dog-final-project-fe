import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '/src/utils/fetch'; 

const ProfileDelete = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
   
        const response = await deleteUser(loggedUser.user.username); 
              setIsLoggedIn (false)
              setLoggedUser (false)
              navigate ("/")
  }

  return (
    <div className="profile-delete">
      <h2>Delete Your Account</h2>
      <p>Warning: This action cannot be undone.</p>
      <button onClick={handleDelete} className="delete-btn">Delete Account</button>
    </div>
  );
};

export default ProfileDelete;