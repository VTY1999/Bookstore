import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './redux/books/books';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
