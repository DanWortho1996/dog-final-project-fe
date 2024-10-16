import ProfileDelete from "./profileDelete/ProfileDelete"
import UpdateProfile from "./updateProfile/UpdateProfile"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"

const ProfileContainer = ({ setLoggedUser, setIsLoggedIn, loggedUser}) => {
  return (
    <div>
        <div>
            <UpdateProfile/>
            <ProfileDelete loggedUser={loggedUser}/>

        </div>
            <ProfileDisplay/>
    </div>
  )
}

export default ProfileContainer