// import { Outlet } from "react-router-dom";
import LogOrSign from '../../components/logOrSign/LogOrSign';

const LandingPage = ({ isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser }) => {
  return (
    <div>
        <LogOrSign
          setIsLoggedIn={setIsLoggedIn}
          setLoggedUser={setLoggedUser}
        />
    </div>

  )
};

export default LandingPage;

