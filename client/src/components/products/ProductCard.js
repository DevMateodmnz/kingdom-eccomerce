// client/src/components/products/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </Link>
        
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-xs font-bold">
            {product.discount}% OFF
          </div>
        )}
        
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <FaHeart className="text-gray-500 hover:text-red-500" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition">
            <FaShoppingCart className="text-gray-500 hover:text-black" />
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link to={`/product/${product._id}`} className="font-medium">
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <div className="text-right">
          {product.discount > 0 ? (
            <>
              <p className="text-sm font-medium text-gray-900">
                ${(product.price * (1 - product.discount / 100)).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;