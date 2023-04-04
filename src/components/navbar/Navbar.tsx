import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav_link">
        Home
      </Link>
      <Link to="/about" className="nav_link">
        About us
      </Link>
      <Link to="/form" className="nav_link">
        Add game
      </Link>
    </nav>
  );
}
