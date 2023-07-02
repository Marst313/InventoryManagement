import React from 'react';
import { HeaderDashboard, Sidebar } from '../components';

const Dashboard = () => {
  return (
    <main className="bg-white h-screen relative font-roboto">
      <Sidebar />
      <HeaderDashboard />
    </main>
  );
};

export default Dashboard;
