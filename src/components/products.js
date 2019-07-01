import React from 'react';

const ProductCard = ({product, id, setActiveProductId, setModalOpen}) => {
  const handleProductClick = () => {
    setActiveProductId(id);
    setModalOpen(true);
  };

  return (
    <div className="product-card" onClick={handleProductClick}>
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
    <div className="product-grid">
      <h2>{categoryName}</h2>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            id={product.id}
            setActiveProductId={setActiveProductId}
            setModalOpen={setModalOpen}
          />
        ))}
      </div>
    </div>
  );
}
