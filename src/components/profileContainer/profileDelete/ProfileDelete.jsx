import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '/src/utils/fetch'; 

const ProfileDelete = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to delete your account? This action is irreversible.');

    if (confirmed) {
      try {
        const response = await deleteUser(); 
        if (response.ok) {
          setIsDeleted(true);
          localStorage.removeItem('user');  
          alert('Account deleted successfully.');
          navigate('/');  
        } else {
          alert('Failed to delete account.');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
      }
    }
  };

  return (
    <div className="profile-delete">
      <h2>Delete Your Account</h2>
      <p>Warning: This action cannot be undone.</p>
      <button onClick={handleDelete} className="delete-btn">Delete Account</button>
    </div>
  );
};

export default ProfileDelete;