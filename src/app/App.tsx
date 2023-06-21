import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, NotFound, About, FormPage, Authentication } from '../pages';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchGamesData } from '../components/cardContainer/gameDataSlice';
import { MainLayout, AuthLayout } from '../layouts';

export default function App() {
  const query = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGamesData({ query }));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="signIn" element={<Authentication type="signIn" />} />
            <Route path="signUp" element={<Authentication type="signUp" />} />
          </Route>
          <Route path="form" element={<FormPage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
