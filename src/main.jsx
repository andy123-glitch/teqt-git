import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/styles/style-output.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';
import Informations from './pages/Informations';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
