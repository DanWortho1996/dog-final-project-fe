import { Route, Routes} from 'react-router-dom'
import ProfileDelete from "./profileDelete/ProfileDelete"
import UpdateProfile from "./updateProfile/UpdateProfile"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"

const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/delete" element={<ProfileDelete />} />
      </Routes>
      <UpdateProfile/>
            <ProfileDisplay/>
    </div>
  )
}
export default ProfileContainer