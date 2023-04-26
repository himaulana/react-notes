import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

import './NoteDetail.css';

function NoteDetail({
  id,
  title,
  createdAt,
  body,
  archived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  return (
    <>
      <div className="detail-container">
        <div className="detail-header">
          <h2>{title}</h2>
          <p>{createdAt}</p>
        </div>
        <div className="detail-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="detail-icons">
        <div className="detail-icon__trash">
          <FiTrash2
            onClick={() => {
              onDelete(id);
            }}
          />
        </div>
        {archived === false ? (
          <div className="detail-icon__isArchive">
            <MdOutlineArchive
              onClick={() => {
                onArchive(id);
              }}
            />
          </div>
        ) : (
          <div className="detail-icon__isArchive">
            <MdOutlineUnarchive
              onClick={() => {
                onUnarchive(id);
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default NoteDetail;
