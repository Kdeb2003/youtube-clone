// SearchBar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
      />
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <FontAwesomeIcon icon={faMicrophone} className="microphone-icon" />
    </div>
  );
}

export default SearchBar;
