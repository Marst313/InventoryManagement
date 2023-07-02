import React from 'react';
import icons from '../assets/icons/icons-dashboard.png';
import iconsDashboard from '../assets/icons/icon-menuDashboard.png';
import iconsKelola from '../assets/icons/icon-menuKelola.png';
import iconsAkun from '../assets/icons/icon-menuAkun.png';
import iconsDepartemen from '../assets/icons/icon-menuDepartemen.png';
import iconsLapor from '../assets/icons/icon-menuLapor.png';
import iconsPengaturan from '../assets/icons/icon-menuPengaturan.svg';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="h-screen float-left w-56 border-r-[1px] aside-shadow">
      <div className="h-1/5 flex  gap-3 font-semibold text-lg px-5 pt-10 items-center">
        <img src={icons} alt="logo invent" className="w-14 h-14" />
        <h1>Invent Pro</h1>
      </div>
      <div className="h-1/2 flex-col flex  px-6 ">
        <h3 className="text-sm text-[#686868] opacity-80">MENU UTAMA</h3>
        <ul className="mt-5 text-primaryFont">
          <li>
            <NavLink to="/dashboard" className={`${({ isActive }) => (isActive ? 'bg-red-400' : '')} flex gap-5 items-center my-5`}>
              <img src={iconsDashboard} alt="menu dashboard" className="h-7 w-7" />
              <h4>Dashboard</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard-kelola" className="flex gap-5  items-center my-5">
              <img src={iconsKelola} alt="menu kelola" className="h-7 w-7" />
              <h4>Kelola Produk</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard-akun" className="flex gap-5  items-center my-5">
              <img src={iconsAkun} alt="menu akun" className="w-7 h-7" />
              <h4>Akun</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard-departemen" className="flex gap-5  items-center my-5">
              <img src={iconsDepartemen} alt="menu departemen" className="w-7 h-7 " />
              <h4>Departemen</h4>
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard-lapor" className="flex gap-5  items-center my-5">
              <img src={iconsLapor} alt="menu lapor-bug" className="w-7 h-7 " />
              <h4>Lapor Bug</h4>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="h-1/3 px-6">
        <h3 className="text-sm text-[#686868] opacity-80">LAINNYA</h3>
        <NavLink to="/dashboard-pengaturan" className="flex gap-5  items-center my-5 text-primaryFont">
          <img src={iconsPengaturan} alt="menu pengaturan" className="w-7 h-7" />
          <h4>Pengaturan</h4>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
