import React from 'react';

const CategoryDisplay = ({ categories }) => {
  return (
    <div className="category-display">
      {categories.map(category => (
        <div key={category.id} className="category-item">
          <img src={category.imageUrl} alt={category.name} />
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryDisplay;
