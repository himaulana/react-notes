import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../NoteItem/NoteItem';

import './NoteList.css';

export default function NoteList({ notes, isArchive }) {
  return (
    <div className="card-container">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} isArchive={isArchive} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.object.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
