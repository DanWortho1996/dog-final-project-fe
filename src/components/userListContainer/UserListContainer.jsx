import  React, {useEffect, useState} from "react";
import { allUsersFetch } from "../../utils/fetch";
import "./UserListContainer.css";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100vh',
    height: '80vh',
  }
  
  const center = {
    lat: 53.4084,
    lng: -2.9916,
  }


const UserListContainer = ({isLoggedIn}) => {
    const [users, setUsers] = useState([]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center)
        map.fitBounds(bounds)
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

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
            <div>
                {isLoaded ?  <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    /> : null}
            </div>
        </div>
    );
};

export default UserListContainer;