import { DATA } from '@/modules/products/mock/product';
import React from 'react';
import ProductDetail from '@/modules/products/components/ProductDetail';

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;

  const product = DATA[0];
  return <ProductDetail {...product} />;
}

export default Page;
