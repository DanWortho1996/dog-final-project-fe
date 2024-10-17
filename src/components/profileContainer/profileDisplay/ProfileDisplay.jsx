import React from 'react'

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