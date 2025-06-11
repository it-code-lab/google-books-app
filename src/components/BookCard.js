import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, id }) => {
  return (
    <div className="book-card">
      <img src={book.imageLinks?.thumbnail || ''} alt={book.title} />
      <h3>{book.title}</h3>
      <p className="authors">{book.authors?.join(', ')}</p>
      <Link to={`/book/${id}`} className="details-button">View Details</Link>


    </div>
  );
};

export default BookCard;
