import Header from "../header/Header";
import Footer from "../footer/Footer";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;