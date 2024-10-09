// import React, {useState} from 'react';

// const UpdateProfile = () => {
//     const [UpdateProfile, setUpdateProfile] = useState({
//         name: '',
//         email: '',
//         password: ''
    // const [message, setMessage] = useState('');

    // useEffect(() => {
    //     fetch('') // Backend API endpoint
    //         .then(response => response.json())
    //         .then(data => setProfile(data))
    //         .catch(error => console.error('Error fetching profile:', error));
    // }, []);
   
//     });

//     const handleChange = (e) => {
//         setUpdateProfile({
//             ...Profiler,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle the save/update logic here(like sending data to a server)
//         console.log("Updated Profile:", profile);
//         alert('profile updated successfully!');
//     };

//     return (
//         <div>
//         <h2>Update Profile</h2>
//         <form onSubmit={handleSubmit}>
//         <div>
//         <label>Name:</label>
//         <input
//         type="text"
//         name="name"
//         value={profile.name}
//         onChange={handleChange}
//         />
//         </div>
//         <div>
//             <label>Email:</label>
//             <input 
//             type="email"
//             name="email"
//             value={profile.email}
//             onChange={handleChange}
//             />
//         </div>
//         <div>
//             <label>Password:</label>
//             <input
//             type="password"
//             name="pasword"
//             value={profile.password}
//             onChange={handleChange}
//             />
//         </div>
//         <button type="submit">Save Changes</button>
//         </form>
// </div>
//     );
// };

// export default UpdateProfile;