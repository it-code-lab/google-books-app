import React, { useEffect, useState } from 'react';
import { searchBooks } from '../utils/api';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBooks('bestseller').then(setBooks);
  }, []);

  const handleSearch = (query) => {
    searchBooks(query).then(setBooks);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
