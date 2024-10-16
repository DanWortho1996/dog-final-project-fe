import ProfileContainer from "../../components/profileContainer/ProfileContainer";
import React from 'react';
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    navigate('/');
  }
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <p>Manage your account information and settings here.</p>
      <button onClick={handleDeleteClick} className="delete-btn">Delete Account</button>
    </div>
  );
};

export default ProfilePage;