import React, {useState} from 'react';

export default function PriceFilter({setPrices}) {
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  let handleSubmit = event => {
    event.preventDefault();
    setPrices({min: minValue, max: maxValue});
  };

  return (
    <div className="price-filter">
      <h3>Filter By Price</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="$ Min"
          value={minValue || ''}
          onChange={event => {
            setMinValue(event.target.value);
          }}
        />
        <input
          placeholder="$ Max"
          value={maxValue || ''}
          onChange={event => {
            setMaxValue(event.target.value);
          }}
        />
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
