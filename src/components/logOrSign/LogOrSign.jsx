import React from 'react'
import Login from "./login/Login";
import Signup from "./signup/Signup";

//Figure out where css will be placed
// import "../../general.css";
import "./LogOrSign.css";


const LogOrSign = ({setIsLoggedIn, setLoggedUser}) => {
  return (
    <div><div>
        {/* <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/> */}
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
      </div>
    </div>
  )
};

export default LogOrSign;