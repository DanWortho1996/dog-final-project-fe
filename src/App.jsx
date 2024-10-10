import './App.css';

import Layout from './components/layout/Layout'
import MenuPage from './pages/menuPage/MenuPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
// import UserListPage from './pages/userListPage/UserListPage';
import LandingPage from './pages/landingPage/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
           <Layout>
             <Router>
              <Routes>
              {/* <Route path="/" element={<ProfilePage/>} />
              <Route path="/menu" element={<UserListPage />} /> */}
              <Route path="/" element={<LandingPage/>} />
              <Route path="/menu" element={<MenuPage />} />
              </Routes>
            </Router>
           </Layout>
  )
};

export default App;