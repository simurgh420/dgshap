'use client';
import axios from 'axios';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

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
      const res = await axios.get('/api/cart');
      return res.data;
    },
    staleTime: 5 * 60 * 1000, // cache for 5 min
  });
  const addToCartMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await axios.post('/api/cart', { productId });
      return res.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('item is added');
    },
    onError: () => {
      toast.error('Failed to Add');
    },
  });
  const removeCartItemMutation = useMutation({
    mutationFn: async (productId: string) => {
      const res = await axios.delete('/api/cart', {
        data: { productId },
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('item is removed');
    },
    onError: () => {
      toast.error('Failed to Remove');
    },
  });
  return { cart, isLoading, error, addToCartMutation, removeCartItemMutation };
};
