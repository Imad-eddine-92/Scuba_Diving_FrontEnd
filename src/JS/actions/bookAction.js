import axios from "axios";
import {
  ADD_BOOK,
  DELETE_BOOK,
  FAIL_BOOK,
  GET_BOOKS,
  GET_MY_BOOKS,
  LOAD_BOOK,
} from "../actionTypes/bookActionType";

// Fonction utilitaire pour configurer les headers avec token
const setAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: { Authorization: `Bearer ${token}` } // <-- backticks corrigés
  };
};

// Charger toutes les réservations
export const getAllBook = () => async (dispatch) => {
  dispatch({ type: LOAD_BOOK });
  try {
    const result = await axios.get('/api/bookings');
    dispatch({ type: GET_BOOKS, payload: result.data.books });
  } catch (error) {
    dispatch({ type: FAIL_BOOK, payload: error.response?.data || error.message });
  }
};

// Charger mes réservations
export const getMyBooks = () => async (dispatch) => {
  dispatch({ type: LOAD_BOOK });
  try {
    const result = await axios.get('/api/bookings/mybooks', setAuthHeaders());
     console.log('Réponse API getMyBooks:', result.data.myBooks);
    dispatch({ type: GET_MY_BOOKS, payload: result.data.myBooks });
  } catch (error) {
    dispatch({ type: FAIL_BOOK, payload: error.response?.data || error.message });
  }
};

// Ajouter une réservation
export const addBook = (newBook) => async (dispatch) => {
  dispatch({ type: LOAD_BOOK });
  try {
    const result = await axios.post('/api/bookings', newBook, setAuthHeaders());

    dispatch({ type: ADD_BOOK, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_BOOK, payload: error.response?.data || error.message });
  }
};

// Supprimer une réservation
export const deleteBook = (id) => async (dispatch) => {
  dispatch({ type: LOAD_BOOK });
  try {
    await axios.delete(`/api/bookings/${id}`, setAuthHeaders()); // <-- backticks corrigés ici aussi
    dispatch({ type: DELETE_BOOK, payload: { _id: id } });
  } catch (error) {
    dispatch({ type: FAIL_BOOK, payload: error.response?.data || error.message });
  }
};
