import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFetch } from "../../../utils/fetch";
import "./Login.css";

const Login = ({ setLoggedUser, setIsLoggedIn }) => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate()
  
const handleChange = (e, setter) => {
      console.log(e.target.value);
      setter(e.target.value);
    };
  
const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("handleSubmit");
  
const data = await loginFetch(username, password);
      console.log("data", data);
  
      if (data.message === "success") {
        
        setLoggedUser(data);
        
        setIsLoggedIn(true);
        navigate("/menu")
      }
    };
  
    return (
      <div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-column login-form"
        >
          <h3>Login</h3>
          <div>
            <input
              onChange={(e) => handleChange(e, setUsername)}
              type="text"
              placeholder="Username..."
              required
            />
            <input
              onChange={(e) => handleChange(e, setPassword)}
              type="password"
              placeholder="Password..."
              required
            />
          </div>
          <button type="submit">Login </button>
        </form>
      </div>
    );
  };
  
  export default Login
