import './App.css';

// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import MenuPage from './pages/menuPage/MenuPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
// import UserListPage from './pages/userListPage/UserListPage';
import LandingPage from './pages/landingPage/LandingPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="logo-container">
        <img src="/src/components/images/logo1.png" alt="logo1 Logo" className="logo1" />       
            <Router>
              <Switch>
              <Route path="/" components={<LandingPage/>} />
              <Route path="/menu" components={<MenuPage />} />
              {/* <Route path="/" element={<LandingPage/>} />
              <Route path="/menu" element={<MenuPage />} /> */}
              </Switch>
            </Router>
            </div>
  )
};

export default App;