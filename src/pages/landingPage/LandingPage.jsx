import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
    <Link to="/menu">Menu</Link>
    <Outlet />
    </>
  )
};

export default LandingPage;