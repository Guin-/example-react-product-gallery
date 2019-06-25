import React from 'react';

const ProductCard = ({product, id, setActiveProductId, setModalOpen}) => {
  const handleProductClick = () => {
    setActiveProductId(id);
    setModalOpen(true);
  };

  return (
    <div onClick={handleProductClick}>
      {product.name} {product.price}
    </div>
  );
};

export default function Products({
  products,
  activeCategoryId,
  categoryName,
  setActiveProductId,
  setModalOpen,
}) {
  return (
    <div className="product-list">
      <h2>{categoryName}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <ProductCard
              product={product}
              id={product.id}
              setActiveProductId={setActiveProductId}
              setModalOpen={setModalOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
