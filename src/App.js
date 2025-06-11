import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/favorites" className="nav-button">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>

    </Router>
  );
};

export default App;
