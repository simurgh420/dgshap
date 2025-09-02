import React from 'react';
import { DATA } from '@/modules/products/mock/product';
import ProductItem from './Productitem';
function ProductList() {
  return (
    <div className="flex flex-wrap justify-between items-center my-16">
      {DATA.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </div>
  );
}
export default ProductList;
