import React from 'react';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="featured-products">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
