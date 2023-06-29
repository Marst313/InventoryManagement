import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full h-[5vh] bg-primary text-white flex items-center p-10 font-rajhdani">
      <Link className="w-1/3 text-2xl font-medium" to="/">
        <span className="text-orangeDark">INVENT </span> PRO
      </Link>
      <div className="flex flex-row justify-between w-1/3 items-center ">
        <Link to="solusi">
          <h2>Solusi</h2>
        </Link>
        <Link to="produk">
          <h2>Produk</h2>
        </Link>
        <Link to="tentang">
          <h2>Tentang Kami</h2>
        </Link>
      </div>

      <div className="flex justify-center w-1/3">
        <Link to="login" className="bg-gradient-to-b from-orangeDark to-orangeMedium p-2 px-10 rounded-md ">
          <h2>Masuk</h2>
        </Link>
        <Link className="p-2 px-10">
          <h2>Daftar</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
