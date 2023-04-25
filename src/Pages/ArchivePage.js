import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArchivedNotes, unarchiveNote } from '../utils/data';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || '',
    };
  }

  onUnarchive = (id) => {
    unarchiveNote(id);
    this.setState({
      notes: getArchivedNotes(),
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

    if (notes == null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section id="home">
        <h1 className="home-title">Notes Archive</h1>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChange}
        />
        <NoteList notes={notes} isArchive={this.onUnarchive} />
      </section>
    );
  }
}

export default function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}
