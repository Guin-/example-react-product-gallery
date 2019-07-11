import React from 'react';

export default function ProductDetailModal({
  product,
  setModalOpen,
  setActiveProduct,
  setActiveProductId,
}) {
  const handleClose = () => {
    setModalOpen(false);
    setActiveProduct(null);
    setActiveProductId(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-content-close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-content-image">
            <img src={product.images.large} alt={product.name} />
          </div>
          <div className="modal-content-description">
            <h2 className="modal-content-title">{product.name}</h2>
            <h2 className="modal-content-price">${product.price}</h2>
            <p className="modal-content-product-description">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
