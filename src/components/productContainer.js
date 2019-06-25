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
}) {
  return (
    <section className="product-container">
      <div className="filter">
        <Categories
          categories={categories}
          setActiveCategoryId={setActiveCategoryId}
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
