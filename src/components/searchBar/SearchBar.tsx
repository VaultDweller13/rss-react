import { useEffect, useRef } from 'react';

import './SearchBar.css';
import { search_icon } from '../../assets/';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const current = inputRef.current;
    if (current) current.value = localStorage.getItem('searchInput') || '';

    return () => {
      localStorage.setItem('searchInput', current?.value || '');
    };
  }, []);

  return (
    <div className="search-bar">
      <form className="search_form">
        <input type="search" className="search_input" placeholder="Search" ref={inputRef} />
        <button type="button" className="search_button">
          <img src={search_icon} alt="Search icon" className="search_icon" />
        </button>
      </form>
    </div>
  );
}
