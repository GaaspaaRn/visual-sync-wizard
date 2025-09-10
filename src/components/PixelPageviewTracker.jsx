import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PixelPageviewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Garante que a função do Pixel (fbq) existe antes de ser chamada
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location]); // Este useEffect roda toda vez que a URL (location) muda

  return null; // Este componente não renderiza nada visualmente
};

export default PixelPageviewTracker;