import React from 'react';

const CartItem = ({ item, onIncrease, onDecrease }) => (
  <div className="flex items-center justify-between border-b py-2 bg-gray-100"> {/* Light grey background added here */}
    <img src={item.images[0]} alt={item.title} className="h-12 w-12 object-cover rounded mr-2" />
    <p className="flex-1">{item.title}</p>
    <div className="flex items-center space-x-2">
      <button onClick={() => onDecrease(item)} className="px-2 bg-gray-300 rounded">-</button>
      <span>{item.quantity}</span>
      <button onClick={() => onIncrease(item)} className="px-2 bg-gray-300 rounded">+</button>
    </div>
    <p className="w-16 text-right">${(item.price * item.quantity).toFixed(2)}</p>
  </div>
);

export default CartItem;
