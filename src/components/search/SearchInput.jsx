import React from 'react';
import '../../styles/search.css';

export default function Search({ query, onQuery, onCancel }) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={onQuery}
      />
      <button className="search-cancel__button" onClick={onCancel}>
        X
      </button>
    </div>
  );
}
