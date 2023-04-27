import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getArchivedNotes, unarchiveNote } from '../../utils/data';
import SearchBar from '../../components/SearchBar/SearchBar';
import NoteList from '../../components/NoteList/NoteList';
import NotFound from '../../components/NotFound/NotFound';

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

    if (notes.length === 0) {
      return <NotFound />;
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

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};
