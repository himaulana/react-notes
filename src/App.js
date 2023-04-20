import React from 'react';
import NoteList from './components/NoteList';
import { getInitialData, showFormattedDate } from './utils/data';
import Search from './components/search/SearchInput';
import FormInput from './components/form/FormInput';
import ButtonForm from './components/form/ButtonForm';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      notes: [],
      archived: [],
      query: '',
      form: {
        id: '',
        title: '',
        body: '',
        createdAt: '',
        archived: false,
      },
      shouldUpdate: false,
    };
  }

  componentDidMount() {
    const data = this.initialData();
    const notes = data.filter((note) => !note.archived);
    const archived = data.filter((note) => note.archived);

    this.setState({
      data,
      notes,
      archived,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.onSearchHandler();
    }

    if (prevState.shouldUpdate !== this.state.shouldUpdate) {
      const notes = this.state.data.filter((note) => !note.archived);
      const archived = this.state.data.filter((note) => note.archived);

      this.setState({ notes, archived });
    }
  }

  initialData = () => {
    const data = getInitialData();
    data.forEach((item) => {
      item.createdAt = showFormattedDate(item.createdAt);
    });

    return data;
  };

  onDeleteHandler = (id) => {
    const dataCopy = [...this.state.data];
    const index = dataCopy.findIndex((item) => item.id === id);
    const shouldUpdate = !this.state.shouldUpdate;

    dataCopy.splice(index, 1);
    this.setState({ data: dataCopy, shouldUpdate });
  };

  onArchiveHandler = (id) => {
    const index = this.state.data.findIndex((note) => note.id === id);

    if (index === -1) {
      return;
    }

    const shouldUpdate = !this.state.shouldUpdate;
    const updatedNotes = [...this.state.data];
    const noteToUpdate = updatedNotes[index];

    updatedNotes[index] = {
      ...noteToUpdate,
      archived: !noteToUpdate.archived,
    };

    this.setState({ data: updatedNotes, shouldUpdate });
  };

  onCancelHandler = () => {
    this.setState({ notes: this.state.data, query: '' });
  };

  onQueryHandler = (e) => {
    const value = e.target.value;
    this.setState({ query: value });
  };

  onSearchHandler = () => {
    if (this.state.query !== '') {
      const results = this.state.data.filter(
        (item) =>
          item.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
          item.body.toLowerCase().includes(this.state.query.toLowerCase()) ||
          item.createdAt.toLowerCase().includes(this.state.query.toLowerCase())
      );

      return this.setState({ notes: results });
    }

    this.setState({
      notes: this.state.data.filter((note) => !note.archived),
      archived: this.state.data.filter((note) => note.archived),
    });
  };

  onTypingHandler = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
        id: prevState.data.length + 1,
        createdAt: showFormattedDate(new Date()),
      },
    }));
  };

  onChekedHandler = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        archived: !this.state.form.archived,
      },
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const shouldUpdate = !this.state.shouldUpdate;

    this.setState(
      (prevState) => ({
        data: [...prevState.data, this.state.form],
        shouldUpdate,
      }),
      () => {
        this.resetForm(e);
      }
    );
  };

  onFormShow = () => {
    document.getElementById('form').style.display = 'block';
  };

  onFormCancel = (e) => {
    e.preventDefault();
    document.getElementById('form').style.display = 'none';
    this.setState({
      form: {
        id: '',
        title: '',
        body: '',
        createdAt: '',
        archived: false,
      },
    });
  };

  resetForm = (e) => {
    this.onFormCancel(e);
    this.setState({
      form: {
        id: '',
        title: '',
        body: '',
        createdAt: '',
        archived: false,
      },
    });
  };

  render() {
    const { form, query, notes, archived } = this.state;
    return (
      <>
        <h1 className="title-app">Reminder Notes App</h1>

        <FormInput
          form={form}
          onTyping={this.onTypingHandler}
          onSubmit={this.onSubmitHandler}
          isChecked={this.onChekedHandler}
          onFormCancel={this.onFormCancel}
        />

        <Search
          query={query}
          onQuery={this.onQueryHandler}
          onCancel={this.onCancelHandler}
        />

        <h1 className="title">Notes</h1>
        <NoteList
          data={notes}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          key="notes"
        />

        <h1 className="title">Notes Archive</h1>
        <NoteList
          data={archived}
          onArchive={this.onArchiveHandler}
          key="archived"
        />

        <ButtonForm onShowForm={this.onFormShow} />
      </>
    );
  }
}

export default App;
