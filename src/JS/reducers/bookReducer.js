import {
  LOAD_BOOK,
  GET_BOOKS,
  GET_MY_BOOKS,
  ADD_BOOK,
  DELETE_BOOK,
  FAIL_BOOK,
} from "../actionTypes/bookActionType";

const initialState = {
  loading: false,
  books: [],
  myBooks: [],
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOK:
      return { ...state, loading: true, error: null };

    case GET_BOOKS:
      return { ...state, loading: false, books: action.payload };

    case GET_MY_BOOKS:
      return { ...state, loading: false, myBooks: action.payload };

    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
        myBooks: [...state.myBooks, action.payload], // 🔧 ajout ici
      };

    case DELETE_BOOK:
      return {
        ...state,
        loading: false,
        books: state.books.filter(book => book._id !== action.payload._id),
        myBooks: state.myBooks.filter(book => book._id !== action.payload._id),
      };

    case FAIL_BOOK:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default bookReducer;
