import React from 'react';

export default function DeleteButton({ id, onDelete }) {
  return (
    <button
      className="card-icon__delete"
      onClick={() => {
        onDelete(id);
      }}
    >
      X
    </button>
  );
}
