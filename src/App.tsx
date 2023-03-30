import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import FormPage from './pages/FormPage';

export default class App extends React.Component {
  render() {
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
}
