import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ( { searchChange }) => {
  return (
    <div id="search">
      <input placeholder="search.." autoComplete="on" id="search-input" name="search-input" onChange={searchChange}/>
      <button><FaSearch /></button>
    </div>
  );
}

export default SearchBox;
