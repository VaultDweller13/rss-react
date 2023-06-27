import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { save } from '../searchBar/searchSlice';

import styles from './SearchBar.module.css';
import { search_icon } from '../../assets/';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const searchInput = useAppSelector((state) => state.search);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const current = inputRef.current;
    if (current) {
      dispatch(save(current.value));
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="search"
          className={styles.input}
          placeholder="Search"
          ref={inputRef}
          defaultValue={searchInput}
        />
        <button
          type="submit"
          className={styles.button}
          onClick={(e: React.MouseEvent) => handleClick(e)}
        >
          <img src={search_icon} alt="Search icon" className={styles.icon} />
        </button>
      </form>
    </div>
  );
}
