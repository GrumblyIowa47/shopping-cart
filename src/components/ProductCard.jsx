import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const imageUrl =
    product.images && product.images[0] ? product.images[0] : placeholderImage;

  return (
    <div className="shadow-lg rounded-lg p-4 bg-white text-center text-gray-800 transform transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <img
        src={imageUrl}
        alt={product.title}
        className="h-32 w-full object-cover rounded-md"
      />
      <h3 className="text-xl font-custom mt-2">
        {product.title || 'New Product'}
      </h3>
      <p className="text-gray-600">Price: ${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="bg-gradient-to-r from-gray-300 to-gray-600 text-white rounded px-4 py-2 mt-2 transition duration-200 transform hover:scale-105 hover:shadow-lg"
        style={{ boxShadow: '0 4px 15px rgba(128, 0, 255, 0.4)' }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
