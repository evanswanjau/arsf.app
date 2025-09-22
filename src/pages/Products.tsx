import React from "react";

const Products: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our premium organic products and sustainable farming
          solutions.
        </p>
      </div>
    </div>
  );
};

export default Products;
