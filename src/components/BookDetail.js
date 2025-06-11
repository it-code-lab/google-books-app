import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../utils/api';

const BookDetail = () => {
    const { id: bookId } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        getBookById(bookId).then(setBook);
    }, [bookId]);

    const handleAddToFavorites = () => {
        let favs = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!favs.includes(bookId)) {
            favs.push(bookId);
            localStorage.setItem('favorites', JSON.stringify(favs));
            alert('Book added to favorites');
        }
    };

    if (!book) return <p>Loading...</p>;

    return (
        <main className="book-detail">
            <h2>{book.volumeInfo.title}</h2>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            <p>{book.volumeInfo.description}</p>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
        </main>
    );

};

export default BookDetail;
