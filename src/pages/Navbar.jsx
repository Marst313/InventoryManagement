import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, NavComponents } from '../components';

const Navbar = () => {
  return (
    <div>
      <NavComponents />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
