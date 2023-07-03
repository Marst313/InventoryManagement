import React, { useEffect, useState } from 'react';
import iconUser from '../assets/icons/icon-user.svg';
import iconNotif from '../assets/icons/icon-notif.svg';
import iconIndonesia from '../assets/icons/dashboard/icon-indonesia.svg';
import arrow from '../assets/icons/dashboard/icon-arrowDown.svg';

const HeaderDashboard = () => {
  const [bahasa, setBahasa] = useState(iconIndonesia);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('button')) setPopUp(false);
    };
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="flex justify-end float-right mt-10 mr-24 gap-10    ">
      <button>
        <img src={iconNotif} alt="icon notif" />
      </button>

      <div className="flex  justify-center items-center gap-2 bg">
        <img src={bahasa} alt="bahasa" className="w-6" />
        <select name="list-bahasa" className="cursor-pointer">
          <option value="indonesia">Indonesia</option>
        </select>
      </div>

      <div className="relative group ">
        <button className="flex items-center gap-3  w-28" onClick={() => setPopUp(!popUp)}>
          <img src={iconUser} alt="icon user" />
          <h2>Bayu</h2>
          <img src={arrow} alt="arrow" className={`${popUp && 'rotate-180'}`} />
        </button>

        <div className={`${popUp ? 'opacity-100' : 'opacity-0'} absolute bg-red-200 w-28 h-10 transition-all mt-5 duration-300 flex items-center justify-center`}>
          <button>Keluar</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
