import React from 'react';

const ProductCard = ({product, id, setActiveProductId, setModalOpen}) => {
  const handleProductClick = () => {
    setActiveProductId(id);
    setModalOpen(true);
  };

  return (
    <button className="product-card" onClick={handleProductClick}>
      <img
        className="product-card-image"
        src={product.images.medium}
        alt={product.name}
      />
      <p className="product-name">{product.name}</p>
      <p className="product-price">${product.price}</p>
    </button>
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
