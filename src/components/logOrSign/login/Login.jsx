import {useState} from "react";

import { loginFetch } from "../../../../../../Week 11/dog-final-project-fe/src/utils/fetch";

//Figure out which css it will be
import "../../../app.css";

import "./Login.css";

const Login = ({setLoggedUser, setIsLoggedIn}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e, setter) => {
        setter(e.target.value);
    }
    const testLogin = (username, password) => {
        console.log(username, password);
        return {
            message: "success",
            user: {
                id: 1,
                username: "dann",
            },
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await loginFetch(username, password);
        if (data.message === "success") {
            setLoggedUser(data);
            setIsLoggedIn(true);
        };
    };
    return (
        <div className="login">
            <form 
            onSubmit={(e) => handleSubmit(e)}
            className="login-form"
            >
                <h4>Login</h4>
                <div>
                    <input
                    onChange={(e) => handleChange(e, setUsername)}
                    type="text"
                    placeholder="Username"
                    />
                    <input 
                    onChange={(e) => handleChange(e, setPassword)}
                    type="text"
                    placeholder="Password"
                    />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
};

export default Login;