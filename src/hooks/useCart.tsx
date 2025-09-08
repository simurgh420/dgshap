'use client';

import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';

export const useCart = () => {
  const queryClient = useQueryClient();

  //fetch cart data
  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      //get data from db
      const res = await fetch('/api/cart');
      if (!res.ok) throw new Error(' filed to fetch cart');
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // cache for 5 min
  });
  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'POST',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error(' filed to Add To cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      alert('item is added');
    },
    onError: () => {
      alert('Failed to Add');
    },
  });

  const removeCartItemMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await fetch('/api/cart', {
        method: 'DELETE',
        body: JSON.stringify({ productId }),
        headers: { 'Content-type': 'application/json' },
      });
      if (!res.ok) throw new Error(' filed to removed To cart');
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      alert('item is added');
    },
    onError: () => {
      alert('Failed to Remove');
    },
  });
  return { cart, isLoading, error, addToCartMutation, removeCartItemMutation };
};
