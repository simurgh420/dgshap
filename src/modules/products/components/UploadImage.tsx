'use client';
import { Button, Input, Label } from '@/components/ui';
import { prsimaType } from '@/lib/prisma';
import React, { FC, useEffect, useState, useCallback } from 'react';
import {
  uploadImage as uploadImageService,
  fetchImages,
  deleteImage,
} from '../services/image';
import Spinner from '@/components/Spinner';
import { CircleX } from 'lucide-react';
import Image from 'next/image';

const UploadImage: FC<{ productId: string }> = ({ productId }) => {
  const [file, setFile] = useState<File | null>(null);
  const [images, setImages] = useState<prsimaType.Image[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };
  const handleDelete = async (imageId: string) => {
    setLoading(true);
    await deleteImage(imageId);

    await getImages();
    setLoading(false);
  };
  const getImages = useCallback(async () => {
    const data = await fetchImages(productId);
    setImages(data.images || []);
    setLoading(false);
  }, [productId]);
  const handleUpload = async () => {
    if (!file || !productId) {
      alert('Please select a file and product first');
      return;
    }

    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('productId', productId);
    const { data } = await uploadImageService(formdata);
    setImages(data?.images || []);
    setFile(null);
  };
  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <div className="w-full">
      <Label htmlFor="picture"> Product Image</Label>
      <div className="flex gap-2 w-full justify-between">
        <Input
          id="picture"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
        <Button onClick={handleUpload}>Upload Image</Button>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex gap-2 mt-4 flex-wrap items-center justify-between">
          {Array.isArray(images) &&
            images.map(
              (item: {
                image: string;
                id: string;
                productId: string | null;
              }) => {
                return (
                  <div className="relative group" key={item.id}>
                    <CircleX
                      className="absolute top-1 right-1 text-red-500  p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    />
                    <Image
                      width={100}
                      height={100}
                      alt="product image"
                      src={item.image}
                      className="mt-4 mx-auto rounded-md"
                    />
                  </div>
                );
              },
            )}
        </div>
      )}
    </div>
  );
};
export default UploadImage;
