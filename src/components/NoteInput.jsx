import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  onTitleChangeHandler = (event) => {
    this.setState(() => {
      return { title: event.target.value };
    });
  };

  onBodyChangeHandler = (event) => {
    this.setState(() => {
      return { body: event.target.value };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    // alert(`Title:${this.state.title} Body:${this.state.body}`);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
        />
        <label htmlFor="body">Keterangan</label>
        <input
          id="body"
          type="text"
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button type="submit">Simpan</button>
      </form>
    );
  }
}

export default NoteInput;
