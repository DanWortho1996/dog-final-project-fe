import ProfileDelete from "./profileDelete/ProfileDelete"
import ProfileDisplay from "./profileDisplay/ProfileDisplay"
import UpdateProfile from "./updateprofile/Updateprofile"

const ProfileContainer = ({loggedUser, setLoggedUser}) => {
  console.log("profile container hit")
  return (
    <div>
        <div>
            <UpdateProfile 
            loggedUser={loggedUser}
            setLoggedUser={setLoggedUser}
            />
            <ProfileDelete/>
        </div>
            <ProfileDisplay/>
    </div>
  )
}

export default ProfileContainer