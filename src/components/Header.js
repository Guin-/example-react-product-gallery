import React from 'react';
import Search from './Search';

const Header = ({setSearchText}) => {
  return (
    <section className="header">
      <div className="store-title">
        <h1>
          Robots &<br />Kittens
        </h1>
      </div>
      <Search setSearchText={setSearchText} />
    </section>
  );
};

export default Header;
