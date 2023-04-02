import { useState, useEffect } from 'react';

import './SearchBar.css';
import icon from '../../assets/img/search.svg';

export default function SearchBar() {
  const [input, setInput] = useState(localStorage.getItem('searchInput') || '');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    setInput(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('searchInput', input);
  }, [input]);

  return (
    <div className="search-bar">
      <form className="search_form">
        <input
          type="search"
          className="search_input"
          placeholder="Search"
          onChange={handleChange}
          value={input}
        />
        <button type="button" className="search_button">
          <img src={icon} alt="Search icon" className="search_icon" />
        </button>
      </form>
    </div>
  );
}
