'use client'
import React, { useState } from 'react';
import { Range } from 'react-range';

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([5, 10]);
  const [thcRange, setThcRange] = useState([11, 18]);
  const [cbdRange, setCbdRange] = useState([1, 5]);
  const [selectedManufacturers, setSelectedManufacturers] = useState(['Avaay', 'Bedrocan']);

  const toggleManufacturer = (manufacturer) => {
    setSelectedManufacturers((prevSelected) =>
      prevSelected.includes(manufacturer)
        ? prevSelected.filter((item) => item !== manufacturer)
        : [...prevSelected, manufacturer]
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Terpene");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const sliderThumbClass = "focus:outline-none w-3 h-5 bg-[#28e3e9] rounded-tl-2xl rounded-br-2xl";
  const sliderTrackClass = "h-2 bg-[#62C3C6] rounded-full";

  return (
    <div className="w-80 mx-auto p-4 rounded-lg">
      {/* <h3 className="text-lg font-semibold text-center text-gray-800 mb-6 bg-[#ECF6F5]">Filter</h3> */}
      <div class="self-stretch rounded bg-[#ECF6F5] flex flex-row items-start justify-center py-0.5 px-5"><h3 class="text-[#045A5C] m-0 relative text-xl tracking-[0.01em] font-bold font-[inherit] inline-block min-w-[65px] sm:text-lg">Filter</h3></div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Preis</h4>
        <Range
          step={5}
          min={0}
          max={100}
          values={priceRange}
          onChange={(values) => setPriceRange(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className={sliderTrackClass}>
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className={sliderThumbClass} key={`price-range-thumb-${index}`} />
          )}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{priceRange[0]} €</span>
          <span>{priceRange[1]} €</span>
        </div>
      </div>

      {/* Manufacturers */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-600 mb-2">Hersteller</h4>
        <div className="flex flex-col space-y-2">
          {['ADREXpharma', 'Aurora', 'Avaay', 'Bedrocan', 'Cannamedical'].map((manufacturer) => (
            <label key={manufacturer} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-teal-500"
                checked={selectedManufacturers.includes(manufacturer)}
                onChange={() => toggleManufacturer(manufacturer)}
              />
              <span className="ml-2 text-sm text-gray-600">{manufacturer}</span>
            </label>
          ))}
        </div>
        <button class="cursor-pointer border-[#ECFEAA] border-[2px] border-solid pt-2 px-[70px] pb-[5px] bg-[transparent] rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none flex flex-row items-center justify-center hover:bg-khaki-200 hover:border-khaki-100 hover:border-[2px] hover:border-solid hover:box-border "><div class="relative text-sm tracking-[0.01em] font-captions text-[#045A5C] text-left inline-block min-w-[106px]">mehr anzeigen</div></button>
      </div>

      {/* THC Content */}
      <div className="mb-8">
        <h4 className="text-center text-lg font-medium text-gray-700 mb-4">THC Gehalt</h4>
        <Range
          step={1}
          min={0}
          max={100}
          values={thcRange}
          onChange={(values) => setThcRange(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className={sliderTrackClass}>
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className={sliderThumbClass} key={`thc-range-thumb-${index}`} />
          )}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{thcRange[0]}%</span>
          <span>{thcRange[1]}%</span>
        </div>
      </div>

      {/* CBD Content */}
      <div className="mb-8">
        <h4 className="text-center text-lg font-medium text-gray-700 mb-4">CBD Gehalt</h4>
        <Range
          step={1}
          min={0}
          max={100}
          values={cbdRange}
          onChange={(values) => setCbdRange(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className={sliderTrackClass}>
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className={sliderThumbClass} key={`cbd-range-thumb-${index}`} />
          )}
        />
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{cbdRange[0]}%</span>
          <span>{cbdRange[1]}%</span>
        </div>
      </div>

      {/* Genetics */}
      <div className="mb-8">
        <h4 className="text-center text-lg font-medium text-gray-700  mb-4">Genetik</h4>
        <div className="flex space-x-2">
          <button className="text-sm px-4 py-1 bg-teal-100 text-teal-600 rounded-md">Indica</button>
          <button className="text-sm px-4 py-1 bg-teal-100 text-teal-600 rounded-md">Sativa</button>
          <button className="text-sm px-4 py-1 bg-teal-100 text-teal-600 rounded-md">Hybrid</button>
        </div>
      </div>

      {/* Bestrahlung */}
      <div className="mb-8">
        <h4 className="text-center text-lg font-medium text-gray-700  mb-4">Bestrahlung</h4>
        <div className="flex space-x-2">
          <button className="text-sm px-3 py-1 bg-teal-100 text-teal-600 rounded-md">bestrahlt</button>
          <button className="text-sm px-3 py-1 bg-teal-100 text-teal-600 rounded-md">nicht bestrahlt</button>
        </div>
      </div>
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

    </div>
  );
};

export default FilterSidebar;
