import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './Pages/HomePage';
import ArchivePage from './Pages/ArchivePage';
import DetailPage from './Pages/DetailPage';

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
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
