import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../../utils/data';
import NoteDetail from '../../components/NoteDetail/NoteDetail';
import NotFound from '../../components/NotFound/NotFound';

export default function DetailPageWrapper() {
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
  }

  onDelete = (id) => {
    deleteNote(id);
    this.props.navigate('/');
  };

  onArchive = (id) => {
    archiveNote(id);
    this.props.navigate('/');
  };

  onUnarchive = (id) => {
    unarchiveNote(id);
    this.props.navigate('/archives');
  };

  render() {
    if (this.state.note == null) {
      return <NotFound />;
    }

    return (
      <NoteDetail
        {...this.state.note}
        onDelete={this.onDelete}
        onArchive={this.onArchive}
        onUnarchive={this.onUnarchive}
      />
    );
  }
}
