import React, {useState} from 'react';

const Search = ({setSearchText}) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchText(inputText);
  };

  const handleChange = event => {
    setInputText(event.target.value);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <i className="fas fa-search search-icon" />
        <input
          className="search-form"
          placeholder="Search products by name"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
