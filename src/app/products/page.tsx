import { prisma, prsimaType } from '@/lib/prisma';
import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';
async function Products() {
  const data: prsimaType.Products[] = await prisma.products.findMany();
  console.log(data);

  return (
    <div>
      <ProductListView />
    </div>
  );
}

export default Products;
