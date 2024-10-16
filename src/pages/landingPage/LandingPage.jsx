// import { Outlet } from "react-router-dom";
import LogOrSign from '../../components/logOrSign/LogOrSign';
import ProfileDelete from '../../components/profileContainer/profileDelete/ProfileDelete';

const LandingPage = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {
  return (
    <div>
        <LogOrSign
          setIsLoggedIn={setIsLoggedIn}
          setLoggedUser={setLoggedUser}/>
        {/* <ProfileDelete loggedUser={loggedUser}/> */}
        <h1>Welcome to PawPals</h1>
        <p>Explore and enjoy the world of pets!</p>
    </div>

  )
};

export default LandingPage;

