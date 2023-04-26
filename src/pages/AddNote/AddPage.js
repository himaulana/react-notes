import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../../utils/data';
import NoteInput from '../../components/NoteInput/NoteInput';

import './AddPage.css';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onTypeHandler = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    addNote(this.state);
    this.props.navigate();
  };

  onResetHandler = (event) => {
    event.preventDefault();
    this.setState({ title: '', body: '' });
  };

  render() {
    return (
      <section id="add-note">
        <h2>Tambah Catatan</h2>
        <NoteInput
          {...this.state}
          onType={this.onTypeHandler}
          onSubmit={this.onSubmitHandler}
          onReset={this.onResetHandler}
        />
      </section>
    );
  }
}

export default function AddPageWrapper() {
  const navigate = useNavigate();

  function onNavigate() {
    navigate('/');
  }

  return <AddPage navigate={onNavigate} />;
}
