import { Route, Routes} from 'react-router-dom'
import ProfileDelete from "./profileDelete/ProfileDelete"
import UpdateProfile from "./updateProfile/UpdateProfile"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"

const ProfileContainer = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {
  return (
    <div className="profile-container">

      <UpdateProfile/>
      <ProfileDelete loggedUser={loggedUser} setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>
            <div>
            <ProfileDisplay loggedUser={loggedUser}/>
            </div>
    </div>
  )
}
export default ProfileContainer