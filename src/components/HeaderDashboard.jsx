import React from 'react';
import iconUser from '../assets/icons/icon-user.svg';

const HeaderDashboard = () => {
  return (
    <div className="flex justify-end">
      <h1>Solusi</h1>
      <h2>Bayu</h2>
      <img src={iconUser} alt="" />
    </div>
  );
};

export default HeaderDashboard;
