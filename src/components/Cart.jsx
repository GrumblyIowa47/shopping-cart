import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onIncrease, onDecrease }) => (
  <div className="p-4 rounded-md text-black space-y-4">
    {cartItems.length === 0 ? (
      <p className="text-gray-400">Your cart is empty.</p>
    ) : (
      cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      ))
    )}
  </div>
);

export default Cart;
