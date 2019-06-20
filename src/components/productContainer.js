import React from 'react';
import Categories from './categories';
import Products from './products';
import PriceFilter from './priceFilter';
import * as requests from '../requests';

export default function ProductContainer({
  categories,
  products,
  setActiveCategoryId,
  setPrices,
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
      <Products products={products} categoryName={categoryName} />
    </section>
  );
}
