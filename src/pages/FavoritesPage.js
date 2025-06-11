import React, { useEffect, useState } from 'react';
import { getBookById } from '../utils/api';
import BookCard from '../components/BookCard';
import BookList from '../components/BookList';

const FavoritesPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('favorites')) || [];
        Promise.all(favs.map(id => getBookById(id)))
            .then(setBooks);
    }, []);

    return (
        <main>
            <h2>Favorite Books</h2>
            <BookList books={books.map(book => ({ id: book.id, volumeInfo: book.volumeInfo }))} />
        </main>
    );

};

export default FavoritesPage;
