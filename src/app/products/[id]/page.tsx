import React from 'react';
import ProductDetail from '@/modules/products/components/ProductDetail';
import { getProductById } from '@/modules/products/services';
import { ProductsWithImages } from '@/types';
import customMetadataGenerator from '@/lib/metadata';
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const data = await params;
  const { id } = data;
  const product = (await getProductById(id)) as ProductsWithImages;
  if (!product) {
    return customMetadataGenerator({
      title: 'Not find',
    });
  }
  return customMetadataGenerator({
    title: product?.name,
    description: product?.description,
    images: product?.images,
  });
}
async function Page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const { id } = data;
  const product = (await getProductById(id)) as ProductsWithImages;
  const jsonld = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product?.images.length && product.images[0].image,
    description: product.description,
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      ></script>
      <ProductDetail {...product} />;
    </section>
  );
}

export default Page;
