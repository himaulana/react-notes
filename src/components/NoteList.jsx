import React from 'react';
import Card from './card/Card';

export default function NoteList({ data, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {data && data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            {...item}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))
      ) : (
        <h2 className="note-empty">Tidak memiliki note</h2>
      )}
      {}
    </div>
  );
}
