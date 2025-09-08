import React from 'react';
import ProductList from '../components/Productlist';
import { getProducts } from '../services';

async function ProductListView() {
  const products = await getProducts();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListView;
