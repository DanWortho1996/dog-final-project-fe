import {useEffect, useState} from "react";
import { allUsersFetch } from "../../utils/fetch";
import "./UserListContainer.css";

const UserListContainer = ({isLoggedIn}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const data = await allUsersFetch();
            console.log(data);
            await setUsers(data.users);
        }

        fetchUsers();
    }, []);

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
                {users.length >= 1 ? (
                    users.map((user) => <p>{user.username}</p>)
                ) : (
                    <p>No Users</p>
                )}
            </div>
        </div>
    );
};

export default UserListContainer;