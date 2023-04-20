import React from 'react';
import '../../styles/form.css';

export default function ButtonForm({ onShowForm }) {
  return (
    <button
      className="button-form"
      onClick={() => {
        onShowForm();
      }}
    >
      {' '}
      +{' '}
    </button>
  );
}
