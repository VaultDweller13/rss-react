import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="nav_link">
          Home
        </Link>
        <Link to="/about" className="nav_link">
          About us
        </Link>
      </nav>
    );
  }
}
