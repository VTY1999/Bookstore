import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeHandler = (e) => {
    setInputText({
      ...inputText, [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: inputText.category,
    };

    dispatch(addBook(newBook));
    setInputText({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <form className="addform" onSubmit={submitHandler}>
      <input name="title" type="text" placeholder="Book title" value={inputText.title} onChange={changeHandler} />
      <input name="author" type="text" placeholder="Author" value={inputText.author} onChange={changeHandler} />
      <select name="category" onChange={changeHandler} value={inputText.category}>
        <option>Action</option>
        <option>Historical</option>
        <option>Thriller</option>
        <option>Horror</option>
        <option>Fantasy</option>
        <option>Romance</option>
      </select>

      <button value="Add book" type="submit">Add Book</button>
    </form>
  );
};

export default Form;
