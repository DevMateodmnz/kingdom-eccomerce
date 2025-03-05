import React from 'react';
import './FilterBar.css';

const FilterBar = ({ categories, onFilterChange }) => {
  return (
    <div className="filter-bar">
      <select onChange={e => onFilterChange(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
