import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home, NotFound, About, FormPage, Authentication } from '../pages';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchGamesData } from '../components/cardContainer/gameDataSlice';

export default function App() {
  const query = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGamesData({ query }));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to={'/404'} />} />
      </Routes>
    </BrowserRouter>
  );
}
