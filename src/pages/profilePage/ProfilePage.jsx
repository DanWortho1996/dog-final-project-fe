import ProfileContainer from "../../components/profileContainer/ProfileContainer";

const ProfilePage = ({ setLoggedUser,loggedUser}) => {
  console.log(" profile page hit")
  return (
    <div>
      <ProfileContainer
      setLoggedUser={setLoggedUser}
      loggedUser={loggedUser}
      />
    </div>
  
  )
}

export default ProfilePage;