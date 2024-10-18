import './App.css';

import { useState } from 'react';

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
  return (
           <Router>
             <Layout>
              <Routes>
              {/*  /<Route path="/" element={<ProfilePage/>}>
              <Route path="/menu" element={<UserListPage />} /> */}
              <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />

                <Route path="/menu" element={<MenuPage />} /> 

                <Route path="/profilepage" element={<ProfilePage loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>} />
                
                <Route path="/activeusers" element={<UserListPage />} />
                <Route path="/dogevents" element={<DogEventsPage />} />
                <Route path="/updateprofile" element={<UpdateProfile/>} />
              </Routes>
            </Layout>
           </Router>
  )
};

export default App;