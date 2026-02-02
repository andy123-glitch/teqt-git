import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@assets/styles/style.scss';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Logement from './pages/Logement';
import NotFound from './pages/NotFound';
import About from './pages/About';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />}  errorElement={<NotFound/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
