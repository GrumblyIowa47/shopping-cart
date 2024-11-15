import React from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ products, filter, setFilter, onAddToCart }) => {
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(filter.toLowerCase())
  );    

  return (
    <div>
      <h1 className="text-5xl font-custom text-center mb-6 text-black transform hover:scale-105 transition duration-300 ease-in-out">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Shopping Cart App</span>
      </h1>
      <SearchBar filter={filter} setFilter={setFilter} />
      <ProductList products={filteredProducts} onAddToCart={onAddToCart} />
    </div>
  );
};

export default HomePage;
