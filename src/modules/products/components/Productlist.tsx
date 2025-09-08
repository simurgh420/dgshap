import React from 'react';
import ProductItem from './Productitem';

import { ProductsWithImages } from '@/types';
function ProductList({ products }: { products: ProductsWithImages[] }) {
  return (
    <div className="flex flex-wrap justify-between items-center my-16">
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
} 
export default ProductList;
