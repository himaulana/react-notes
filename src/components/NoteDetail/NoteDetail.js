import React from 'react';
import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

import './NoteDetail.css';

export default function NoteDetail({
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

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
