import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book.volumeInfo} id={book.id} />
      ))}
    </div>
  );
};

export default BookList;
