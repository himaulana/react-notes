import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePageWrapper from './pages/Home/HomePage';
import ArchivePageWrapper from './pages/Archive/ArchivePage';
import DetailPageWrapper from './pages/Detail/DetailPage';
import AddPageWrapper from './pages/AddNote/AddPage';
import Navigation from './components/Navigation/Navigation';

import './styles/app.css';

function App() {
  return (
    <>
      <header>
        <h1>Sticky Notes</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePageWrapper />} />
          <Route path="/archives" element={<ArchivePageWrapper />} />
          <Route path="/notes/:id" element={<DetailPageWrapper />} />
          <Route path="/notes/add" element={<AddPageWrapper />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
