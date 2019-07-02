import React from 'react';
import classNames from 'classnames';

export default function Categories({
  categories,
  activeCategoryId,
  setActiveCategoryId,
}) {
  return (
    <div className="categories">
      <h3>All Categories</h3>
      <div>
        {categories.map(category => (
          <div
            className={classNames({
              category: true,
              activeCategory: category.id == activeCategoryId,
            })}
            key={category.id}
            onClick={() => {
              setActiveCategoryId(category.id);
            }}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
