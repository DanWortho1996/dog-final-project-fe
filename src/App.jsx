import './App.css';

import { useState, useEffect } from 'react';

import Layout from './components/layout/Layout'
import MenuPage from './pages/menuPage/MenuPage';
import LandingPage from './pages/landingPage/LandingPage';
import ProfilePage from './pages/profilePage/ProfilePage';

import UserListPage from './pages/userListPage/UserListPage';
import DogEventsPage from './pages/dogEventPage/DogEventsPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UpdateProfile from './components/profileContainer/updateprofile/Updateprofile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);

  useEffect(()=>{
    console.log("useeffect")
    async function test(){
      const response = await fetch (`${import.meta.env.VITE_BASE_URL}/health`, {
        method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            }
      })
      const data =await response.json()
      console.log("health", data)
    }
    test()
  },[])


  console.log("!!!!!!!!!!!!!!", loggedUser)
  

  return (
           <Router>
             <Layout>
              <Routes>
              {/*  /<Route path="/" element={<ProfilePage/>}>
              <Route path="/menu" element={<UserListPage />} /> */}
              <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
                <Route path="/menu" element={<MenuPage />} />     
                <Route path="/profilepage" element={<ProfilePage loggedUser={loggedUser} setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
                <Route path="/activeusers" element={<UserListPage />} />
                <Route path="/dogevents" element={<DogEventsPage />} />
                <Route path="/updateprofile" element={<UpdateProfile/>} />
              </Routes>
            </Layout>
           </Router>
  )
};

export default App;
