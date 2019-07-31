import React from 'react';
import Categories from './Categories';
import Products from './Products';
import PriceFilter from './PriceFilter';
import * as requests from '../requests';

export default function ProductContainer({
  categories,
  products,
  setPrices,
  categoryName,
  activeCategoryId,
  dispatch,
}) {
  return (
    <section className="product-container">
      <div className="sidebar-filters">
        <Categories
          categories={categories}
          dispatch={dispatch}
          activeCategoryId={activeCategoryId}
        />
        <PriceFilter setPrices={setPrices} />
      </div>
      <Products
        products={products}
        categoryName={categoryName}
        dispatch={dispatch}
      />
    </section>
  );
}
