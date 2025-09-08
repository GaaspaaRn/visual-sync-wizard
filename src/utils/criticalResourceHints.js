// Critical resource hints for better performance
export const addCriticalResourceHints = () => {
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = '/fonts/Dystopian-Regular.otf';
  fontLink.as = 'font';
  fontLink.type = 'font/otf';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Prefetch likely next pages
  const prefetchPages = ['/rodriz', '/zatelli', '/lucashenrique', '/diguera'];
  prefetchPages.forEach(page => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = page;
    document.head.appendChild(link);
  });

  // Preconnect to external services
  const preconnects = [
    'https://open.spotify.com',
    'https://www.youtube.com', 
    'https://www.instagram.com',
    'https://api.whatsapp.com'
  ];
  
  preconnects.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Service Worker registration
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully');
    } catch (error) {
      console.log('Service Worker registration failed');
    }
  }
};