import React from 'react';
import './FilterTabs.css';

export default function FilterTabs({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="filter-tabs-container">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`filter-tab-btn ${activeCategory === category ? 'active-filter-tab' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
