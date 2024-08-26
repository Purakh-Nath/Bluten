'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`relative z-10 self-stretch  flex flex-row items-center justify-between p-4  ${className}`}
    >
     
  

      {/* Search Bar */}
      <div className="flex-1 rounded-full bg-azure flex flex-row items-center justify-between pt-1.5 px-4 pb-2 box-border max-w-96 gap-5">
        <input
          type="text"
          placeholder="Suchen"
          className="bg-transparent text-[inherit] placeholder:text-[inherit] border-none outline-none flex-1 min-w-[62px] text-base"
        />
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
          alt="Search Icon"
          src="/iconsearch.svg"
        />
      </div>

      {/* Hamburger Menu Icon for Small Screens */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-primary text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-start md:items-center justify-between md:relative absolute top-full left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-20`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[30px]">
          {/* Nav Links */}
          {['Rezept einlösen', 'Live Bestand', 'Videosprechstunde', 'FAQs', 'Kontakt'].map(
            (item, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
                <span className="text-[#045a5c] text-base">{item}</span>
              </div>
            )
          )}
        </div>

        {/* Cart and Button */}
        <div className="flex flex-row items-center gap-4 mt-4 md:mt-0">
          <div className="relative h-[30px]">
            <div className="absolute top-0 right-0 rounded-[100%] bg-secondary-30 text-xs text-accent-blue font-abhaya-libre p-1">
              <span className="font-medium">1</span>
            </div>
            <img
              className="h-full w-6"
              loading="lazy"
              alt="Cart Icon"
              src="/vector.svg"
            />
          </div>
          <button
      className={`rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-[#ECFEAA] flex flex-row items-start justify-start pt-[7px] px-[18px] pb-2 text-left text-sm text-black font-captions ${className}`}
    >
      <a className="[text-decoration:none] relative tracking-[0.01em] text-[inherit] inline-block min-w-[74px] text-[#045A5C]">
        Anmelden
      </a>
    </button>
          {/* <button className="rounded-full bg-[#ECFEAA] px-5 py-2 text-[#045A5C]">Anmelden</button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

