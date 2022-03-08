import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <h1>Bookstore</h1>
      <div className="links">
        <NavLink to="/books" className="linklist"> BOOKS </NavLink>
        <NavLink to="/Categories" className="linklist"> CATEGORIES </NavLink>
      </div>
    </nav>
  );
}
export default Nav;
