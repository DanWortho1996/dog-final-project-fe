import ProfileDelete from "./profileDelete/ProfileDelete"
import UpdateProfile from "./updateProfile/UpdateProfile"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"

const ProfileContainer = () => {
  return (
    <div>
        <div>
            <UpdateProfile/>
            <ProfileDelete/>
        </div>
            <ProfileDisplay/>
    </div>
  )
}

export default ProfileContainer