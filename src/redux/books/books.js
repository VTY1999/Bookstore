const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

const returnBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const addBook = (newBook) => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kQDJnBa8pVnQ9r9R8wZR/books/',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newBook),
    },
  );

  if (response.ok) {
    dispatch(returnBook(newBook));
  }
};

export const removeBook = (id) => async (dispatch) => {
  const body = {
    item_id: id,
  };
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kQDJnBa8pVnQ9r9R8wZR/books/${id}`,
    {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    });
  if (response.ok) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

export const fetchBook = () => async (dispatch) => {
  const response = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kQDJnBa8pVnQ9r9R8wZR/books',
  );
  const result = await response.json();
  const loadData = Object.entries(result);
  loadData.map(([key, value]) => {
    const { title, category } = value[0];
    return {
      item_id: key,
      title,
      category,
    };
  });

  if (loadData) {
    dispatch({
      type: FETCH_BOOK,
      payload: loadData,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case FETCH_BOOK:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default reducer;
