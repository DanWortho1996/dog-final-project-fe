import React from 'react'
import { useState } from 'react';
import {updateUserFetch} from "../../../utils/fetch";


const UpdateProfile = ({ loggedUser, setLoggedUser }) => {
  console.log("update profile hit")
 //declare state here called newEmail
const [newEmail, setNewEmail] = useState("");
// const [username, setUsername] = useState(loggedUser.username);

  const handleInputChange = (e, setter) => {
    setter(e.target.value)
   // add user imput to newEmail
  };

  const handleSubmit = async (e) => {
   e.preventDefault();
   console.log ("handlesubmit", loggedUser)

// call updateUserFetch, passing username from loggedUser newEmail as args, and store in veriable data 
const data = await updateUserFetch (loggedUser.user.username, newEmail);
console.log("data", data)

// setLoggedUser to correct value which will be stored in data veriable 
  setLoggedUser(data)
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
       {/* <label>
        Username (for verification):
        <input
        type="text"
        name="username"
        value={username}
       onChange={(e) => handleInputChange(e, setUsername)}
       required
        />
        </label> */}

        <label>
          New Email:
          <input
            type="email"
            name="newEmail"
            value={newEmail}
            onChange={(e) =>handleInputChange(e, setNewEmail)}
          />
        </label>
        

  
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UpdateProfile;






