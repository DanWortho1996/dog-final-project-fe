import './App.css';
import Layout from './components/layout/Layout';
import MenuPage from './pages/menuPage/MenuPage';
import LandingPage from './pages/landingPage/LandingPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
// import UserListPage from './pages/userListPage/UserListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <Router>
      <Layout>
        {/* Include the Header and pass the logout function */}
        <Header onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* <Route path="/userlist" element={<UserListPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;