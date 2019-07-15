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

  const {name, price, images, description} = product;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-content-close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal-content">
          <div className="modal-content-image">
            <img src={images.large} alt={name} />
          </div>
          <div className="modal-content-description">
            <h2 className="modal-content-title">{name}</h2>
            <h2 className="modal-content-price">${price.toFixed(2)}</h2>
            <p className="modal-content-product-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
