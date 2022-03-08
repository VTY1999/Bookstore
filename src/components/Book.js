import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const deleteBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <ul className="Books">
        {books.map(({ id, title, author }) => (
          <li key={id}>
            <span>
              {title}
              {' '}
            </span>
            <span>
              {author}
              {' '}
            </span>
            <button type="button" onClick={() => deleteBookFromStore(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
