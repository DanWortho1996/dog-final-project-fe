import './App.css';

import { useState } from 'react';

import Layout from './components/layout/Layout'
import MenuPage from './pages/menuPage/MenuPage';
import LandingPage from './pages/landingPage/LandingPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import ProfileContainer from './components/profileContainer/ProfileContainer';
import UserListPage from './pages/userListPage/UserListPage';
import DogEventsPage from './pages/dogEventPage/DogEventsPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);

  console.log("!!!!!!!!!!!!!!", loggedUser)
  
  return (
           <Router>
             <Layout>
              <Routes>
              {/*  /<Route path="/" element={<ProfilePage/>}>
              <Route path="/menu" element={<UserListPage />} /> */}
              <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
                <Route path="/menu" element={<MenuPage />} />     
                <Route path="/profilepage" element={<ProfilePage loggedUser={loggedUser}/>} />
                <Route path='/profilecontainer' element={<ProfileContainer loggedUser={loggedUser}/>} />
                <Route path="/activeusers" element={<UserListPage />} />
                <Route path="/dogevents" element={<DogEventsPage />} />

              </Routes>
            </Layout>
           </Router>
  )
};

export default App;