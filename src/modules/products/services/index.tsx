'use server';
import { Product } from '@/generated/prisma';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const getProducts = async () => {
  const result = await prisma.product.findMany({ include: { images: true } });
  return result;
};
export const getProductsAPI = async () => {
  // const result = await fetch('/api/product');
  const result = await fetch('http://localhost:3000/api/product', {
    next: { revalidate: 30 },
  });
  const response = await result.json();
  return response;
};

export const getProductById = async (id: string) => {
  const result = await prisma.product.findFirst({
    where: { id },
    include: { images: true },
  });
  if (!result) {
    return null;
  }
  return result;
};
export const upsertProduct = async (product: Product) => {
  const { id, ...data } = product;
  if (id) {
    const res = await fetch('/api/product', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...data }),
    });
    if (!res.ok) throw new Error('Update failed');
    return res.json();
  } else {
    const res = await fetch('/api/product', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Create failed');
    revalidatePath('/dashboard/products');
    return res.json();
  }
};
export const deleteProduct = async (id: string) => {
  const res = await fetch(`/api/product?id=${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete');
  // Optionally return something for the caller to decide UI updates
  return res.json();
};
