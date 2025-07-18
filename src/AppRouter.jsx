import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DJRodriz from './pages/DJRodriz';
import DJLucasHenrique from './pages/DJLucasHenrique';
import DJZatelli from './pages/DJZatelli';
import DJDigoIDG from './pages/DJDigoIDG';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rodriz" element={<DJRodriz />} />
        <Route path="/lucashenrique" element={<DJLucasHenrique />} />
        <Route path="/zatelli" element={<DJZatelli />} />
        <Route path="/digoidg" element={<DJDigoIDG />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;