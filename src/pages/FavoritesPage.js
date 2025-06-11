import React, { useEffect, useState } from 'react';
import { getBookById } from '../utils/api';
import BookCard from '../components/BookCard';

const FavoritesPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites')) || [];
    Promise.all(favs.map(id => getBookById(id)))
      .then(setBooks);
  }, []);

  return (
    <div>
      <h2>Favorite Books</h2>
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book.volumeInfo} id={book.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
