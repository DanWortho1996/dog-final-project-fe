import { Route, Routes} from 'react-router-dom'
import ProfileDelete from "./profileDelete/ProfileDelete"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"
import UpdateProfile from './updateProfile/UpdateProfile'

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