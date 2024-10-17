import {useEffect, useState} from "react";
import { allUsersFetch } from "../../utils/fetch";
import "./UserListContainer.css";

const UserListContainer = ({isLoggedIn}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("useEffect in UserListContainer");
        async function fetchUsers() {
            const data = await allUsersFetch();
            console.log(data);
            await setUsers(data.users);
        }

        fetchUsers();
    }, []);
    
    return (
        <div className="userLContainer">
            <div className="inner-userLContainer">
                <p>Active Users</p>
                {users.length >= 1 ? (
                    users.map((user) => (
                        <div className="userCard" key={user.id}>
                            <p>{user.username}</p>
                            {user.dogs.length < 1 ? null : <p>{user.dogs[0].dogName}</p>}
                        </div>
                    ))
                ) : (
                    <p>No Users</p>
                )}
            </div>
        </div>
    );
};

export default UserListContainer;