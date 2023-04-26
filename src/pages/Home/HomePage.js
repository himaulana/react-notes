import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, archiveNote } from '../../utils/data';
import SearchBar from '../../components/SearchBar/SearchBar';
import NoteList from '../../components/NoteList/NoteList';
import ButtonAdd from '../../components/Button/ButtonAdd';

import './HomePage.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    };
  }

  onArchive = (id) => {
    archiveNote(id);
    this.setState({
      notes: getActiveNotes(),
    });
  };

  onKeywordChange = (keyword) => {
    this.setState({
      keyword,
    });

    this.props.keywordChange(keyword);
  };

  render() {
    const notes = this.state.notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) ||
        note.body.toLowerCase().includes(this.state.keyword.toLowerCase())
      );
    });

    if (notes === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section id="home">
        <h1 className="home-title">Notes Active</h1>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChange}
        />
        <NoteList notes={notes} isArchive={this.onArchive} />
        <ButtonAdd />
      </section>
    );
  }
}

export default function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}
