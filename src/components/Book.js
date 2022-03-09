import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook, removeBook } from '../redux/books/books';

const Book = () => {
  const percentage = Math.floor(Math.random() * 90);
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, []);
  return (
    <>
      {books.map((book) => (
        <div key={book.item_id} className="card">
          <div className="info">
            <span className="book-category">{book.category}</span>
            <h2>{book.title}</h2>
            <span>{book.author}</span>
            <div className="container">
              <ul>
                <li>
                  <button id={book.item_id} type="button">
                    Comments
                  </button>
                </li>
                <li>
                  <button id={book.item_id} type="button">
                    Edit
                  </button>
                </li>
                <li>
                  <button id={book.item_id} type="button" onClick={() => dispatch(removeBook(book.item_id))}>
                    Remove
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="progress">
            <span>{`${percentage}%`}</span>
            <span>completed</span>
          </div>
          <div className="view-progress">
            <span>Current chapter</span>
            <h3>Chapter 2</h3>
            <button id={book.item_id} type="button">Update progress</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
