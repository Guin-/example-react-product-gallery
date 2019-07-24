import React from 'react';
import Categories from './Categories';
import Products from './Products';
import PriceFilter from './PriceFilter';
import * as requests from '../requests';

export default function ProductContainer({
  categories,
  products,
  setActiveCategoryId,
  setPrices,
  setActiveProductId,
  setModalOpen,
  categoryName,
  activeCategoryId,
}) {
  return (
    <section className="product-container">
      <div className="sidebar-filters">
        <Categories
          categories={categories}
          setActiveCategoryId={setActiveCategoryId}
          activeCategoryId={activeCategoryId}
        />
        <PriceFilter setPrices={setPrices} />
      </div>
      <Products
        products={products}
        categoryName={categoryName}
        setActiveProductId={setActiveProductId}
        setModalOpen={setModalOpen}
      />
    </section>
  );
}
