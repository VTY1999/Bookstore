import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook, removeBook } from '../redux/books/books';
import status from '../Images/status-icon.png';

const Book = () => {
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
            <h2 className="title">{book.title}</h2>
            <div className="container">
              <ul className="ul">
                <li>
                  <button id={book.item_id} className="button border-right" type="button">
                    Comments
                  </button>
                </li>
                <li>
                  <button id={book.item_id} className="button border-right" type="button" onClick={() => dispatch(removeBook(book.item_id))}>
                    Remove
                  </button>
                </li>
                <li>
                  <button id={book.item_id} className="button" type="button">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="progress">
            <img className="progress-icon" src={status} alt="circular status icon" />
            <div className="ach">
              <span className="percent">47%</span>
              <span className="pro-state">completed</span>
            </div>
          </div>
          <div className="view-progress">
            <span className="curr-chapter">CURRENT CHAPTER</span>
            <h3 className="chapter">Chapter 2</h3>
            <button className="udt-btn" id={book.item_id} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Book;
