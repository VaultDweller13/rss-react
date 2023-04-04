import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home, NotFound, About, FormPage } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/*" element={<Navigate to={'/404'} />} />
      </Routes>
    </BrowserRouter>
  );
}
