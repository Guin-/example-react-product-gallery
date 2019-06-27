import React from 'react';

export default function ProductDetailModal({
  product,
  setModalOpen,
  setActiveProduct,
}) {
  const handleClose = () => {
    setModalOpen(false);
    setActiveProduct(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
