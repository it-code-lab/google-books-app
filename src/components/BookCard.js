import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, id }) => {
  return (
    <div className="book-card">
      <img src={book.imageLinks?.thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.authors?.join(', ')}</p>
      <Link to={`/book/${id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
