import React from 'react';
import '../../styles/form.css';

export default function FormInput({
  form,
  onTyping,
  onSubmit,
  isChecked,
  onFormCancel,
}) {
  return (
    <form id="form" className="form">
      <div className="form-item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={onTyping}
          required
        />
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          name="body"
          rows="10"
          cols="50"
          value={form.body}
          onChange={onTyping}
          required
        ></textarea>
      </div>
      <div className="form-footer">
        <label>
          <input
            type="checkbox"
            name="isArchived"
            checked={form.archived}
            onChange={isChecked}
          />
          Archive Notes
        </label>
        <button
          type="button"
          onClick={(event) => {
            onFormCancel(event);
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={(event) => {
            onSubmit(event);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
}
