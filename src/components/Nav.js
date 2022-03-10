import React from 'react';
import { NavLink } from 'react-router-dom';
import profile from '../Images/profile-icon.png';

function Nav() {
  return (
    <nav className="navbar">
      <div className="links">
        <h1 className="header1">Bookstore CMS</h1>
        <NavLink to="/books" className="linklist"> BOOKS </NavLink>
        <NavLink to="/Categories" className="linklist"> CATEGORIES </NavLink>
      </div>
      <img className="profile" src={profile} alt="Nav icon" />
    </nav>
  );
}
export default Nav;
