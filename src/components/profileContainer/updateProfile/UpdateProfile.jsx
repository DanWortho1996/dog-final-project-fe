import { useState } from 'react';
import './UpdateProfile.css';
import { updateUserFetch } from '../../../utils/fetch';  // Utility to send updated data to the backend

const UpdateProfile = ({ isLoggedIn, setIsLoggedIn, loggedUser, setLoggedUser }) => {
  // Initial state based on the current loggedUser
  const [formData, setFormData] = useState({
    username: loggedUser?.username || '',  // Default current username
    newUserName: '',
    email: loggedUser?.email || '',  // Default current email
    newEmail: '',
  });

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;  // Destructure name and value from event target
    setFormData((prev) => ({
      ...prev,
      [name]: value,  // Dynamically set the field being updated
    }));
  };

  // Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the frontend first (setLoggedUser immediately)
    const updatedUser = {
      username: formData.newUserName || formData.username,  // If newUserName is empty, keep the current username
      email: formData.newEmail || formData.email,  // If newEmail is empty, keep the current email
    };

    setLoggedUser(updatedUser);  // Immediately update the frontend with new user data

    try {
      // Send updated data to the backend for persistence
      const updatedData = await updateUserFetch({
        username: formData.username,
        newusername: formData.newUserName,
        email: formData.email,
        newemail: formData.newEmail,
      });

      console.log('Profile updated on the backend', updatedData);
    } catch (error) {
      console.error('Error updating profile on the backend:', error);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Current Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            readOnly  // Prevent changes to the current username
          />
        </label>
        <br />
        <label>
          New Username:
          <input
            type="text"
            name="newUserName"
            value={formData.newUserName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Current Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly  // Prevent changes to the current email
          />
        </label>
        <br />
        <label>
          New Email:
          <input
            type="email"
            name="newEmail"
            value={formData.newEmail}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;


