'use client';
import React from 'react';
import Image from 'next/image';
import { memo } from 'react';

const ProductCard = ({ product }) => {
  return (
    
    <div className="
    w-[310px] rounded-tl-11xl rounded-tr-none rounded-br-11xl rounded-bl-none  border-accent-blue border-[3px] border-solid box-border flex flex-col items-start justify-start gap-3 text-left text-xs text-red font-captions

    max-w-xs rounded-xl  overflow-hidden shadow-lg p-4 bg-white mx-auto">
      {/* Top Labels */}

      <div className="self-stretch flex flex-row items-start justify-start pt-5 px-5 pb-0 gap-0">
  <div className="rounded-full bg-red-5 flex flex-row items-start justify-start py-[3px] px-3 gap-1 text-left text-xs text-red font-captions" style={{ backgroundColor: "rgba(161, 11, 11, 0.05)" }}>
    <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
      <div className="w-1 h-1 relative rounded-[50%] bg-red" style={{ backgroundColor: "#a10b0b" }}></div>
    </div>
    <div className="rounded-full relative tracking-[0.01em] font-light inline-block min-w-[87px]" style={{ color: "#a10b0b" }}>
      nicht lieferbar
    </div>
  </div>
  <div className="self-stretch w-[50px] rounded-11xl bg-secondary-10 flex-row items-center justify-start py-[3px] px-3 box-border gap-1 text-black1">
   
    <div className="self-stretch  w-[36px]  bg-[#EFF9F9] relative tracking-[0.01em] font-light px-2  rounded-full ">
      Neu
    </div>
  </div>
</div>




      {/* <div className="flex justify-between items-center mb-2">
        <span className="text-red-600 text-sm">nicht lieferbar</span>
        <span className="text-gray-500 text-xs bg-gray-200 rounded-full px-2 py-1">Neu</span>
      </div> */}
      {/* Product Image */}
      <div className="flex justify-center items-center mb-4">
      <Image
        src={product.image}
        alt={product.name}
        width={620} 
        height={300} 
        className=""
        priority // prioritize the image
      />
      </div>
      {/* Product Details */}
      <div className="bg-[#e0f7fa] p-4 rounded-md border-t border-[#28e3e9]">
        <div className="mb-2">
          <span className="text-gray-600 text-xs bg-[#d0ecef] rounded-full px-2 py-1">{product.brand}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white text-gray-700 border-2 border-[#28e3e9] rounded-md px-2 py-1 text-sm">THC 18%</span>
          <span className="bg-white text-gray-700 border-2 border-[#28e3e9] rounded-md px-2 py-1 text-sm">{`CBD <1%`}</span>
          <Image
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/iconbestrahlt.svg"
            width={24} 
            height={24} 
          />
        </div>
        <h2 className="text-gray-800 text-lg font-bold mb-2">{product.name}</h2>
        <div className="flex justify-between text-sm text-gray-600">
          <div>
            <p>Kultivar: {product.kultivar}</p>
            <p>Genetik: {product.genetik}</p>
          </div>
          <div>
            <p>Mango</p>
            <p>Hybrid</p>
          </div>
        </div>
        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-800 text-lg font-bold">€ {product.price} <span className="text-sm text-gray-600">pro Gramm</span></span>
          <button
      className={`rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-none bg-[#ECFEAA] flex flex-row items-center justify-center pt-[7px] px-[18px] pb-2 whitespace-nowrap text-left text-sm text-secondary-text font-captions `}
    >
      <div className="relative tracking-[0.01em] inline-block min-w-[128px]">
        in den Warenkorb
      </div>
    </button>
          {/* <button className="bg-yellow-400 text-gray-800 rounded-md px-4 py-2">in den Warenkorb</button> */}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);