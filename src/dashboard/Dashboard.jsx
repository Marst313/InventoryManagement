import React from 'react';
import { HeaderDashboard, MainDashboard, Sidebar } from '../components';

const Dashboard = () => {
  return (
    <main className="bg-white h-screen relative font-roboto  ">
      <Sidebar />
      <HeaderDashboard />
      <MainDashboard />
    </main>
  );
};

export default Dashboard;
