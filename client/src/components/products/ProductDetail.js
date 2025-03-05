import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
