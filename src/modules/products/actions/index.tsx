'use server';

import { prisma } from '@/lib/prisma';
import { Product, ProductCategory } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const validationUpsertProduct = (data: Record<string, unknown>) => {
  const formSchema = z.object({
    name: z.string().min(1, { message: 'name is required' }),
    description: z.string(),
    price: z
      .number({ message: 'price is required' })
      .min(1, { message: 'price must be at least 1' }),
    quantity: z
      .number({ message: 'quantity is required' })
      .min(1, { message: 'quantity must be at least 1' })
      .max(1000, { message: 'quantity must be at most 1000' }),
    category: z.enum(
      Object.values(ProductCategory) as [ProductCategory, ...ProductCategory[]],
    ),
  });

  const result = formSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    (result.error.issues ?? []).forEach((err) => {
      const key =
        Array.isArray(err.path) && err.path.length > 0
          ? String(err.path[0])
          : 'general';
      errors[key] = err.message;
    });
    return errors;
  }
  return null;
};

export const upsertProduct = async (
  prevData: { data: Product | null; error: Record<string, string> | null },
  formData: FormData,
) => {
  const id = formData.get('id') as string | null;

  const productData = {
    name: String(formData.get('name') ?? ''),
    category: formData.get('category') as ProductCategory,
    description: (formData.get('description') as string) ?? undefined,
    price: Number(formData.get('price') ?? 0),
    quantity: Number(formData.get('quantity') ?? 0),
  } as Product;

  //validation

  const error = validationUpsertProduct(productData);
  if (error) {
    return { data: prevData.data, error };
  }
  try {
    let result;
    if (id) {
      result = await prisma.product.update({
        where: {
          id,
        },
        data: productData,
      });
    } else {
      result = await prisma.product.create({
        data: productData,
      });
    }

    revalidatePath('/dashboard/products');

    // return result;
    return { error: null, data: result };
  } catch (error) {
    console.error('Product upsert failed:', error);
    return { data: prevData.data, error: { general: 'upsert failed' } };
  }
};
