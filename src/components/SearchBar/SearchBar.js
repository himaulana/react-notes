import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-container">
      <input
        className="search-column"
        type="text"
        placeholder="Cari berdasarkan nama maupun isi"
        value={keyword}
        onChange={(e) => {
          keywordChange(e.target.value);
        }}
      />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
