import React from 'react';
import './navbar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';
import Login from './Login';

function Navbar() {
 
  return (
    <nav className="navbar">
      <div className="navbar-title">Book Review Blog</div>
      <ul className="navbar-options">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
       <li><Link to="/add-review">Add Review</Link></li>
        <li><Login /></li>
      </ul>
      
    </nav>
  );
}

export default Navbar;