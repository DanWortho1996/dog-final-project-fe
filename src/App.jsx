import './App.css';

import { useState } from 'react';

import Layout from './components/layout/Layout'
import MenuPage from './pages/menuPage/MenuPage';
import LandingPage from './pages/landingPage/LandingPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
import UserListPage from './pages/userListPage/UserListPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  return (
           <Layout>
             <Router>
              <Routes>
              {/* <Route path="/" element={<ProfilePage/>} />
              <Route path="/menu" element={<UserListPage />} /> */}
              <Route path="/" element={<LandingPage setIsLoggedIn={setIsLoggedIn} setLoggedUser={setLoggedUser}/>} />
              <Route path="/menu" element={<MenuPage />} />
              </Routes>
            </Router>
           </Layout>
  )
};

export default App;