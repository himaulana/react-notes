import React from 'react';
import '../../styles/card.css';
import DeleteButton from './DeleteButton';
import StatusButton from './StatusButton';

export default function Card({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <>
      <div id="card" className="card">
        <div className="card-header">
          <div className="card-header__category">
            <p>{createdAt}</p>
          </div>
          <h2 className="card-header__title">{title}</h2>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        {onDelete ? (
          <div className="card-icon">
            <DeleteButton id={id} onDelete={onDelete} />
          </div>
        ) : null}
        {!archived ? (
          <div className="card-footer">
            <StatusButton id={id} onArchive={onArchive} context="Archive" />
          </div>
        ) : (
          <div className="card-footer">
            <StatusButton id={id} onArchive={onArchive} context="Active" />
          </div>
        )}
      </div>
    </>
  );
}
