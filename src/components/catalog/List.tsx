'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CartWithProduct } from '@/types';

function CatalogList() {
  const params = useSearchParams();
  const id = params.get('id');
  const [images, setImages] = useState<CartWithProduct[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/product/${id}`);
        const data = res.data;
        setImages(data?.images || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>loading....</p>;
  return (
    <div className="flex flex-wrap justify-center mb-4">
      {images?.map((_image: any, index) => {
        return (
          <div className="p-1" key={index}>
            <Card>
              <CardContent className="flex w-[400px] h-[400px] items-center justify-center p-6">
                <Image
                  src={_image?.image}
                  alt="gallery"
                  width={400}
                  height={400}
                  className="hover:scale-105 transform transition-transform duration-300"
                />
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default CatalogList;
