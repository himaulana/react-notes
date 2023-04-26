import React from 'react';
import { Link } from 'react-router-dom';
import { MdNoteAdd } from 'react-icons/md';

import './Button.css';

export default function ButtonAdd() {
  return (
    <Link to="/notes/add">
      <MdNoteAdd className="btn-add" />
    </Link>
  );
}
