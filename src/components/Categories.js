import React from 'react';
import classNames from 'classnames';

export default function Categories({categories, activeCategoryId, dispatch}) {
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
              dispatch({type: 'SELECT_CATEGORY', category});
            }}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  );
}
