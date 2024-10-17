import ProfileContainer from "../../components/profileContainer/ProfileContainer"; 
import React from 'react';

const ProfilePage = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {

  if (!isLoggedIn || !loggedUser) {
    return <p>Please log in to view your profile.</p>;
  }

  const { username, email } = loggedUser.user; 

  const navigate = useNavigate();

  const handleLogin = () => {

    setIsLoggedIn(true);
    setLoggedUser(userData);
    
    navigate('/profilepage');
  };
  return (
    <div className="profile-page">
      <h1>Welcome to your profile, {username}!</h1>
      <div className="profile-details">
        <p><strong>Username:</strong> {username}</p>
        <p><strong>Email:</strong> {email}</p>
        {/* Add more user info */}
      </div>
      <ProfileContainer loggedUser={loggedUser} setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser} 
      />
    </div>
  );
};

export default ProfilePage;