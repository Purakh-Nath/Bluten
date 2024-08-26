'use client';
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
        id: 1,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 2,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 3,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 4,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 5,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 6,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 7,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
      {
        id: 8,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png',
      },
      {
        id: 9,
        brand: 'Canify',
        name: 'Cannabis Flos 18/1 PT Mango',
        kultivar: 'Mango',
        genetik: 'Hybrid',
        price: '11,66',
        image: '/img@2x.png', 
      },
    
  ];

  return (
    <div className="w-full md:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
