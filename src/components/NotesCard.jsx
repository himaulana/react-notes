import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/card.css';


function Card({ note, icon, onClick }) {
  return (
    <div className="card">
      <div
        className="card-icon"
        onClick={() => {
          onClick(note.id);
        }}
      >
        {icon}
      </div>
      <h2 className="card-title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h2>
      <p className="card-content">{note.body}</p>
    </div>
  );
}

export default Card;
