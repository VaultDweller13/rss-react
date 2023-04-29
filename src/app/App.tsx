import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, NotFound, About, FormPage } from '../pages';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchGamesData } from '../components/cardContainer/gameDataSlice';

export default function App() {
  const searchQuery = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGamesData(searchQuery));
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to={'/404'} />} />
    </Routes>
  );
}
