import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
