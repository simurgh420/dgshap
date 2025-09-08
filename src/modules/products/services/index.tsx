'use server';
import { Product } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const getProducts = async () => {
  return prisma.product.findMany({ include: { images: true } });
};

export const getProductsAPI = async () => {
  return prisma.product.findMany({
    include: { images: true },
  });
};

export const getProductById = async (id: string) => {
  return prisma.product.findFirst({
    where: { id },
    include: { images: true },
  });
};

export const upsertProduct = async (product: Product) => {
  const { id, ...data } = product;
  let result;

  if (id) {
    result = await prisma.product.update({
      where: { id },
      data,
    });
  } else {
    result = await prisma.product.create({
      data,
    });
  }

  revalidatePath('/dashboard/products');
  return result;
};

export const deleteProduct = async (id: string) => {
  await prisma.product.delete({ where: { id } });
  revalidatePath('/dashboard/products');
  return { success: true };
};
