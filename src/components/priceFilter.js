import React from 'react';

export default function PriceFilter() {
  return (
    <div className="price-filter">
      <h3>Filter By Price</h3>
      <form>
        <input placeholder="$ Min" />
        <input placeholder="$ Max" />
        <button>Go</button>
      </form>
    </div>
  );
}
