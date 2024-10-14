import React from 'react'
import { useState } from "react";
import { signupFetch } from "../../../utils/fetch";
import "./Signup.css";

const Signup = ({ setLoggedUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");

const handleChange = (e, setter) => {
  console.log (e.target.value)
setter(e.target.value)
}

const handleSubmit = async (e) => {
  e.preventDefault()
  console.log ("handlesubmit")

  const data = await signupFetch (username, email, password)
  console.log ("data", data)

  if (data.message === "success") {
    // setLoggedUser
    setLoggedUser(data);
    // setIsLoggedIn
    setIsLoggedIn(true);
  }
}

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-column signup-form"
      >
        <h3>Signup</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setEmail)}
            type="email"
            placeholder="Email..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
