import React from 'react'
import {  Link } from "react-router-dom"
export const Navbar = () => {
  return (
    <nav>
      <Link to="/">website</Link>
      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

  );
}
