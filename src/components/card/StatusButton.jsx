import React from 'react';

export default function StatusButton({ id, onArchive, context }) {
  return (
    <button
      className="card-footer__archive"
      onClick={() => {
        onArchive(id);
      }}
    >
      {context}
    </button>
  );
}
