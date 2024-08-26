'use client'
import { useMemo, useState } from "react";

const HeaderSecond = ({ className = "" }) => {
  const buttonBorderStyle = useMemo(() => ({
    border: "2px solid #62c3c6",
  }), []);
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sortieren nach");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={`self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-0.5 box-border max-w-full ${className}`}>
      <div className="p-16 flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-5 max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-20 box-border gap-20 min-w-[315px] max-w-full mq900:gap-10 mq900:pr-10 mq900:box-border">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="self-stretch flex flex-row items-start justify-start gap-5 text-left text-base text-primary font-captions mq900:flex-wrap">
            <a href="#" className="text-[#62C3C6] [text-decoration:none] relative text-[inherit] inline-block min-w-[49px]">Home</a>
            <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" loading="lazy" alt="arrow icon" src="/checkboxiconarrowright.svg" />
            <a href="#" className="text-[#62C3C6]  relative inline-block min-w-[99px]">Livebestand</a>
            <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="arrow icon" src="/checkboxiconarrowright.svg" />
            <span className="relative text-[#045A5C] font-bold">Cannabis Blüten</span>
          </nav>

          {/* Heading */}
          <header className="w-40 flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border gap-3 text-left text-17xl text-black1 font-captions">
            <div className="flex flex-col items-start justify-start pt-[1px] px-0 pb-0">
              <div className="w-5 h-[26px] relative rounded-tl-xl rounded-tr-none rounded-br-xl rounded-bl-none bg-accent-blue" />
            </div>
            <h1 className="m-0 flex-1 relative text-inherit font-semibold font-[inherit] sm:text-10xl md:text-3xl">Blüten</h1>
          </header>
        </div>

        {/* Search Section */}
        <div className="w-[340px] flex flex-col items-start justify-start pt-[108px] px-0 pb-0 box-border max-w-full">
          <div className="rounded-full flex-1 rounded-11xl bg-azure flex flex-row items-start justify-between pt-1.5 px-4 pb-2 box-border max-w-full gap-5">
            <input 
              type="text" 
              placeholder="Suchen" 
              className="bg-transparent text-[inherit] placeholder:text-[inherit] border-none outline-none flex-1 min-w-[62px] text-base" 
              aria-label="Search"
            />
            <img className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]" alt="Search Icon" src="/iconsearch.svg" />
          </div>
        </div>

        {/* Buttons and Filters */}
        <div className="w-[438px] flex flex-col items-end justify-start gap-[45px] max-w-full text-center text-sm text-secondary-text font-captions mq450:gap-[22px]">
          <div className="w-[227px] flex flex-row items-start justify-end py-0 px-0.5 box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-3">
              <label htmlFor="gkv-option" className="self-stretch relative tracking-[0.01em]">GKV mit Kostenübernahme?</label>
              <button
                id="gkv-option"
                className="cursor-pointer pt-1 px-[70px] pb-[5px] bg-[transparent] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center hover:bg-khaki-200 hover:border-khaki-100 hover:box-border"
                style={buttonBorderStyle}
                aria-label="Price Options"
              >
                <span className="relative text-sm tracking-[0.01em] font-captions text-black text-left inline-block min-w-[106px]">Preisoptionen</span>
              </button>
            </div>
          </div>

          <div className="w-full self-stretch flex flex-row items-start justify-start gap-5 text-left text-base sm:flex-wrap">
            {/* Dropdown Section */}
            <div className="flex-1 rounded bg-[#AEDFE0] flex flex-row items-start justify-start py-[7px] px-3 box-border gap-[9px] min-w-[122px] sm:min-w-[132px] relative">
              <button 
                className="flex items-center justify-between w-full"
                onClick={toggleDropdown}
              >
                <span className="relative tracking-[0.01em] font-semibold inline-block min-w-[124px]">
                  {selectedOption}
                </span>
                <img className="w-4 h-4 relative overflow-hidden shrink-0" alt="Sort arrow" src="/iconarrow-down.svg" />
              </button>
              {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                <ul className="py-2">
  <li 
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => handleOptionClick("Manufacturer")}
  >
    Manufacturer
  </li>
  <li 
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => handleOptionClick("THC Content")}
  >
    THC Content
  </li>
  <li 
    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => handleOptionClick("CBD Content")}
  >
    CBD Content
  </li>
</ul>

                </div>
              )}
            </div>

            {/* Availability Toggle */}
            <div className="flex-1 rounded bg-[#AEDFE0] flex flex-row items-center justify-between py-[7px] px-3 box-border gap-2.5 min-w-[115px] sm:min-w-[132px]">
              <span className="tracking-[0.01em] font-semibold">Verfügbarkeit</span>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" aria-label="Availability" />
                <div className="relative w-11 h-6 bg-[#AEDFE0] rounded-full peer-checked:bg-teal-600">
                  <div className="after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                </div>
              </label>
            </div>

            {/* List View Button */}
            <button className="hidden sm:block h-[34px] rounded bg-secondary-30 flex-row items-center justify-center py-0.5 px-3 box-border" aria-label="List view">
              <img className="h-6 w-6 relative overflow-hidden shrink-0" loading="lazy" alt="List view icon" src="/iconlistview.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;
