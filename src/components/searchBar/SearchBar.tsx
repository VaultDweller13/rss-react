import { useEffect, useRef } from 'react';

import './SearchBar.css';
import { search_icon } from '../../assets/';

type SearchBarProps = {
  callback: (query: string) => void;
};

export default function SearchBar(props: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { callback } = props;

  useEffect(() => {
    const current = inputRef.current;
    if (current) {
      current.value = localStorage.getItem('searchInput') || '';
      callback(current.value);
    }

    return () => {
      localStorage.setItem('searchInput', current?.value || '');
      callback(current?.value || '');
    };
  }, [callback]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const current = inputRef.current;
    if (current) {
      localStorage.setItem('searchInput', current?.value || '');
      callback(current?.value || '');
    }
  };

  return (
    <div className="search-bar">
      <form className="search_form">
        <input type="search" className="search_input" placeholder="Search" ref={inputRef} />
        <button
          type="submit"
          className="search_button"
          onClick={(e: React.MouseEvent) => handleClick(e)}
        >
          <img src={search_icon} alt="Search icon" className="search_icon" />
        </button>
      </form>
    </div>
  );
}
