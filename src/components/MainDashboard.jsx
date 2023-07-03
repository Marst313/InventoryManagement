import React from 'react';
import iconStats from '../assets/icons/dashboard/icon-stats.svg';
import iconArrow from '../assets/icons/dashboard/icon-arrowDown.svg';

const MainDashboard = () => {
  return (
    <section className=" w-full pt-5      ">
      <div className="bg-gradient-to-t from-orangeDark to-orangeMedium flex w-3/4 h-24 px-14 py-3 rounded-xl mt-32 ml-72">
        <h1 className="text-white text-5xl ">
          Selamat Datang, <span>Bayu</span>
        </h1>
      </div>

      <div className="flex gap-5 font font-semibold text-orangeDark  mt-5 ml-80 ">
        <img src={iconStats} alt="icon statistik" />
        <h4>Statistik Inventaris</h4>
      </div>

      <div className="w-3/4 ml-72 mt-4 gap-5 flex justify-center  ">
        <div className="bg-blue-500 w-1/4 h-28 rounded-2xl py-5 px-5 text-headerFont card-box-shadow ">
          <h3 className="font-semibold text-lg ">Total Produk</h3>
          <p className="mt-2">9</p>
        </div>
        <div className="bg-green-500 w-1/4 h-28 rounded-2xl py-5 px-5 text-headerFont card-box-shadow">
          <h3 className="font-semibold text-lg ">Total Nilai Produk</h3>
          <p className="mt-2">RP.127.000.000</p>
        </div>
        <div className="bg-red-500 w-1/4 h-28 rounded-2xl py-5 px-5 text-headerFont card-box-shadow">
          <h3 className="font-semibold text-lg ">Stok Habis</h3>
          <p className="mt-2">1</p>
        </div>
        <div className="bg-yellow-500 w-1/4 h-28 rounded-2xl py-5 px-5 text-headerFont card-box-shadow">
          <h3 className="font-semibold text-lg ">Semua Kategori</h3>
          <p className="mt-2">6</p>
        </div>
      </div>

      <button className="text-2xl font-bold text-orangeDark border-b-2 border-slate-200  mt-4 w-[79%]  flex justify-evenly gap-[40rem]">
        <h4 className="text-start ">Produk Inventaris</h4>
        <img src={iconArrow} alt="" className="ml-44" />
      </button>
    </section>
  );
};

export default MainDashboard;
