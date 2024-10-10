import './App.css';

// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import MenuPage from './pages/menuPage/MenuPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
// import UserListPage from './pages/userListPage/UserListPage';
import LandingPage from './pages/landingPage/LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
            <Router>
              <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/menu" element={<MenuPage />} />
              </Routes>
            </Router>
  )
};

export default App;