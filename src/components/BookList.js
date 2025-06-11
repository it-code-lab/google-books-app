import React from 'react';
import BookCard from './BookCard';
import './BookList.css'; // (new file)

const BookList = ({ books }) => {
  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.id} book={book.volumeInfo} id={book.id} />
      ))}
    </div>
  );
};

export default BookList;
