import React from 'react';
import LoadSpin from './LoadSpin';

const MyBooksList = ({ books = [], loading, error }) => {
  if (loading) return <LoadSpin />;
  if (error) {
    const errorMessage = typeof error === 'string' ? error : error.message || JSON.stringify(error);
    return <p style={{ color: 'red' }}>{errorMessage}</p>;
  }
  if (books.length === 0) return <p>Aucune réservation.</p>;

  return (
    <ul>
      {books.map(book => (
        <li key={book._id} style={{ marginBottom: '15px' }}>
          <strong>Produit :</strong> {book.product?.title || 'Produit supprimé'} <br />
          <strong>Réservé le :</strong> {new Date(book.createdAt).toLocaleDateString()} <br />
          <strong>Nom :</strong> {book.name} - <strong>Email :</strong> {book.email}
        </li>
      ))}
    </ul>
  );
};

export default MyBooksList;
