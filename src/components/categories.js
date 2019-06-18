import React from 'react';

export default function Categories({categories, setActiveCategoryId}) {
  return (
    <div className="categories">
      <h3>All Categories</h3>
      <ul>
        {categories.map(category => (
          <li
            key={category.id}
            onClick={() => {
              setActiveCategoryId(category.id);
            }}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
