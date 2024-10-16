import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUserFetch } from '../../../utils/fetch';
import './ProfileDelete.css'; 
import LandingPage from '../../../pages/landingPage/LandingPage';

const ProfileDelete = ({ setLoggedUser, setIsLoggedIn, loggedUser }) => {
  const navigate = useNavigate();
  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Deleted Account');

    const data = await deleteUserFetch(); 
    console.log('data', data);
    if (data.message === 'success') {

      setLoggedUser(null);
      setIsLoggedIn(false);
      console.log('Navigating to landing page...');
      navigate('/');
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-column delete-form">
        <h3>Delete Profile</h3>
        <button type="submit" onChange={(e) => handleChange(e,LandingPage)}> Delete Account </button>
      </form>
    </div>
  );
};

export default ProfileDelete;