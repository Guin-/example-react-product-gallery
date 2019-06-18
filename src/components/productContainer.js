import React from 'react';
import Categories from './categories';
import Products from './products';
import PriceFilter from './priceFilter';
import * as requests from '../requests';

export default function ProductContainer({
  categories,
  products,
  setActiveCategoryId,
  categoryName,
}) {
  return (
    <section className="product-container">
      <div className="filter">
        <Categories
          categories={categories}
          setActiveCategoryId={setActiveCategoryId}
        />
        <PriceFilter />
      </div>
      <Products products={products} categoryName={categoryName} />
    </section>
  );
}
