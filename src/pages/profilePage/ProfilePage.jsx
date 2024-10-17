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


//   if (!isLoggedIn || !loggedUser) {
//     return <p>Please log in to view your profile.</p>;
//   }

//   // Destructure user details from the loggedUser object
//   const { username, email } = loggedUser.user; 

//   return (
//     <div className="profile-page">
//       <h1>Welcome to your profile, {username}!</h1>
//       <div className="profile-details">
//         <p><strong>Username:</strong> {username}</p>
//         <p><strong>Email:</strong> {email}</p>
//         {/* Add other user information as needed */}
//       </div>
//     </div>
//   );
// };

