import { Pagination as DefaultPagination } from '@mui/material/';
import styles from './Pagination.module.css';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchGamesData } from '../../components/cardContainer/gameDataSlice';
import { ChangeEvent, useCallback } from 'react';

export default function Pagination() {
  const dispatch = useAppDispatch();
  const query = useAppSelector((store) => store.search);

  const handleChange = useCallback(
    (_: ChangeEvent<unknown>, page: number) => {
      dispatch(fetchGamesData({ query, page: String(page) }));
    },
    [dispatch, query]
  );

  return (
    <div className={styles.pagination}>
      <DefaultPagination count={10} onChange={handleChange} />
    </div>
  );
}
