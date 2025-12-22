import React, { Component } from 'react';
import './Nav.css';
import { Link } from "react-router-dom";



const Nav = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/Contact" className="nav-link">Assign</Link>
        <Link to="/Services" className="nav-link">Services</Link>
        <Link to="/featured" className="nav-link">Featured</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
      </nav>
    </>
  );
};

export default Nav;
