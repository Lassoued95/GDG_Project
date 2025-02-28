"use client";

import React from "react";
import { useNavigate } from "react-router-dom";

export const products = [
  { id: 1, name: "shoes", image: "image-product-home/shoes_prod.png" },
  { id: 2, name: "jackets", image: "image-product-home/jacket_prod.png" },
  { id: 3, name: "hoodies", image: "image-product-home/hoodie_prod.png" },
  { id: 4, name: "bags", image: "image-product-home/bag_prod.png" },
  { id: 5, name: "caps", image: "image-product-home/cap1.png" },
  { id: 6, name: "pants", image: "image-product-home/pantalon.png" },
  { id: 7, name: "glasses", image: "image-product-home/glasses55.jpg" },
  { id: 8, name: "shorts", image: "image-product-home/short1.png" },
];

function Product() {
  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="w-full h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg flex-shrink-0 relative group cursor-pointer"
            onClick={() => handleProductClick(product.name)}
          >
            {/* Image with overlay effect */}
            <div className="relative w-full h-60">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                Click to see more
              </div>
            </div>
            <h1 className="text-xl font-semibold mt-4 text-center">{product.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
