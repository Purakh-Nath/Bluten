'use client';

import React from 'react';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';

const MainLayout = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <FilterSidebar />
      <ProductGrid />
    </div>
  );
};

export default MainLayout;
