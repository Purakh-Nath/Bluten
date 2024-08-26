'use client'
import React from "react";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`bg-darkcyan-200  text-white py-10 px-4 lg:px-40 xl:px-64 2xl:px-80 rounded-tl-2xl rounded-tr-2xl  ${className}`}>
      <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-12 justify-between">
        
        <div className="flex flex-col gap-3">
          <a href="#" className="text-sm tracking-wide font-light">AGB</a>
          <a href="#" className="text-sm tracking-wide font-light">Impressum</a>
          <a href="#" className="text-sm tracking-wide font-light">Datenschutz</a>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div className="flex gap-2 items-center">
            <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
            <span>Rezept einlösen</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
            <span>Live Bestand</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
            <span>Videosprechstunde</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
            <span>FAQs</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2.5 h-4 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl"></div>
            <span>Kontakt</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm tracking-wide font-light">Standort</span>
          <div className="font-bold">
            <p>Bergstraße 49 - 57</p>
            <p>69469 Weinheim</p>
            <p>(3 Glocken Quartier)</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm tracking-wide font-light">Telefon</span>
          <div className="font-bold">
            0223 545 5250
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm tracking-wide font-light">Öffnungszeiten</span>
          <div className="font-bold">
            <p>Mo-Fr: 09:00 – 18:00 Uhr</p>
            <p>Sa: 09:00 – 14:00 Uhr</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


