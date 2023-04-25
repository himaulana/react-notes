import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/data';
import NoteDetail from '../components/NoteDetail';

import '../styles/pages/detailpage.css';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onUnarchive = this.onUnarchive.bind(this);
  }

  onDelete(id) {
    deleteNote(id);
    this.props.navigate('/');
  }

  onArchive(id) {
    archiveNote(id);
    this.props.navigate('/');
  }

  onUnarchive(id) {
    unarchiveNote(id);
    this.props.navigate('/archives');
  }

  render() {
    const { note } = this.state;

    if (note == null) {
      return <p>Note is not found!</p>;
    }

    return (
      <NoteDetail
        {...note}
        onDelete={this.onDelete}
        onArchive={this.onArchive}
        onUnarchive={this.onUnarchive}
      />
    );
  }
}

export default DetailPageWrapper;
