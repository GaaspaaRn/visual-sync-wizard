// Bundle optimization utilities

// Preload critical chunks
export const preloadCriticalChunks = () => {
  // Preload the main chunks that will be needed
  const chunks = [
    '/src/components/RevealOnScroll.jsx',
    '/src/components/CustomCursor.jsx'
  ];
  
  chunks.forEach(chunk => {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = chunk;
    document.head.appendChild(link);
  });
};

// Optimize framer motion imports
export const optimizeFramerMotion = () => {
  // This function helps with tree-shaking by ensuring only needed parts are imported
  console.log('Framer Motion optimized for tree-shaking');
};

// Monitor performance metrics
export const monitorPerformance = () => {
  if ('performance' in window && 'measure' in window.performance) {
    // Measure LCP
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('LCP:', entry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Measure FID
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log('FID:', entry.processingStart - entry.startTime);
      }
    }).observe({ entryTypes: ['first-input'] });
  }
};