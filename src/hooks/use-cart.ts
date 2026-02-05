"use client";

import { useContext } from 'react';
import type { Book } from '@/lib/types';
import { CartContext } from '@/components/providers';

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  const { state, dispatch } = context;

  const addToCart = (book: Book) => dispatch({ type: 'ADD_ITEM', payload: book });
  const removeFromCart = (bookId: number) => dispatch({ type: 'REMOVE_ITEM', payload: bookId });
  const updateQuantity = (bookId: number, quantity: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { bookId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return {
    cartItems: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  };
};
