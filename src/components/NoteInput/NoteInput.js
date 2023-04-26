import React from 'react';
import PropTypes from 'prop-types';

import './NoteInput.css';

export default function NoteInput({ title, body, onType, onSubmit, onReset }) {
  return (
    <div className="form-container">
      <form className="form-input" onSubmit={onSubmit}>
        <div className="form-input__item">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="form-title"
            type="text"
            name="title"
            value={title}
            onChange={onType}
          />
        </div>
        <div className="form-input__item">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            className="form-body"
            rows={15}
            cols={80}
            name="body"
            value={body}
            onChange={onType}
          />
        </div>
        <div className="form-item__button">
          <button type="reset" onClick={onReset}>
            Batal
          </button>
          <button type="submit">Simpan</button>
        </div>
      </form>
    </div>
  );
}

NoteInput.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onType: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
