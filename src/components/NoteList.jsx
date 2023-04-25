import React from 'react';
import NoteItem from './NoteItem';

import '../styles/components/noteList.css';

export default function NoteList({ notes, isArchive }) {
  return (
    <div className="card-container">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} isArchive={isArchive} />
      ))}
    </div>
  );
}
