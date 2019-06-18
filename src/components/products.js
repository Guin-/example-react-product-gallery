import React from 'react';

export default function Products({products, activeCategoryId, categoryName}) {
  return (
    <div className="product-list">
      <h2>{categoryName}</h2>
      <ul>
        {products.map(product => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
}
