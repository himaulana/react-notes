import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineUnarchive } from 'react-icons/md';
import { MdOutlineArchive } from 'react-icons/md';

import './NoteItem.css';

export default function NoteItem({ note, isArchive }) {
  return (
    <div className="card">
      <div
        className="card-icon"
        onClick={() => {
          isArchive(note.id);
        }}
      >
        {note.archived ? <MdOutlineUnarchive /> : <MdOutlineArchive />}
      </div>
      <h2>
        <Link to={`/notes/${note.id}`} className="card-title">
          {note.title}
        </Link>
      </h2>
      <p>{note.createdAt}</p>
      <p className="card-content">{note.body}</p>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  isArchive: PropTypes.bool.isRequired,
};
