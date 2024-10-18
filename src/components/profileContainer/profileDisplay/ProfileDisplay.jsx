import React from 'react'
import './ProfileDisplay.css'

const ProfileDisplay = ({loggedUser}) => {
  return (
    <div>
      <h3>Your details</h3>
      <p>Username: {loggedUser.user.username}</p>
      <p>Email: {loggedUser.user.email}</p>
       </div>
  )
}

export default ProfileDisplay