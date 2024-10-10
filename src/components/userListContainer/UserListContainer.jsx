import {useEffect, useState} from "react";

import userListContainer from "./userListContainer/UserListContainer";

import "./userListContainer.css";

const UserContainer = ({isLoggedIn}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const data = await allUsersFetch();
            console.log(data);
            await setUsers(data.users);
        }

        fetchUsers();
    }, [isLoggedIn]);

    const testUseEffect = () => {
        console.log("useEffect in userlistcontainer is working");
        return {
            users: [
                {id: 1, username: "dave"},
                {id: 2, username: "jess"},
                {id: 3, username: "andy"},
                {id: 4, username: "gill"},
            ],
        };
    };
    
    return (
        <div className="userLContainer">
            <div className="inner-userLContainer">
                {users.length >= 1? (
                    users.map((user) => <userListContainer user={user} key={user.id}/>)
                ) : (
                    <p>No Users</p>
                )}
            </div>
        </div>
    );
};

export default UserContainer;