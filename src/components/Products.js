import React from 'react';

const ProductCard = ({product, id, setActiveProductId, setModalOpen}) => {
  const handleProductClick = () => {
    setActiveProductId(id);
    setModalOpen(true);
  };

  const {name, price, images} = product;
  return (
    <button className="product-card" onClick={handleProductClick}>
      <img className="product-card-image" src={images.medium} alt={name} />
      <p className="product-name">{name}</p>
      <p className="product-price">${price.toFixed(2)}</p>
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
      {products.length > 0 ? (
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
      ) : (
        <h2>No items found...</h2>
      )}
    </div>
  );
}
