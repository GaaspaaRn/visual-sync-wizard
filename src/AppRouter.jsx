import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import DJRodriz from './pages/DJRodriz';
import DJLucasHenrique from './pages/DJLucasHenrique';
import DJZatelli from './pages/DJZatelli';
import DJDigueraPro from './pages/DJDigueraPro';

function AppRouter() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/rodriz" element={<DJRodriz />} />
          <Route path="/lucashenrique" element={<DJLucasHenrique />} />
          <Route path="/zatelli" element={<DJZatelli />} />
          <Route path="/diguera" element={<DJDigueraPro />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default AppRouter;