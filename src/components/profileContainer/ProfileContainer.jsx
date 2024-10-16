import ProfileDelete from "./profileDelete/ProfileDelete"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"
import UpdateProfile from "./updateprofile/Updateprofile"

const ProfileContainer = () => {
  return (
    <div>
        <div>
            <UpdateProfile />
            <ProfileDelete/>
        </div>
            <ProfileDisplay/>
    </div>
  )
}

export default ProfileContainer