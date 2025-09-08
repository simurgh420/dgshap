import React, { Suspense } from 'react';
import ProductTable from '../components/ProductTable';
import { getProducts } from '../services';

async function ProductDashboardView() {
  const products = await getProducts();
  return (
    <div>
      <Suspense fallback={<div>در حال بارگذاری</div>}>
        <ProductTable products={products} />
      </Suspense>
    </div>
  );
}

export default ProductDashboardView;
