import { useEffect } from 'react';

const CriticalCSS = () => {
  useEffect(() => {
    // Inject critical CSS for above-the-fold content
    const criticalStyles = `
      .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: hsl(0 0% 4%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        contain: strict;
      }
      
      .hero {
        contain: layout style paint;
        content-visibility: auto;
        min-height: 100vh;
        background: hsl(0 0% 4%);
      }
      
      .hero-title-main {
        font-family: 'Dystopian', 'Montserrat', sans-serif;
        font-size: clamp(2rem, 8vw, 6rem);
        line-height: 1.1;
        color: hsl(0 0% 100%);
        will-change: transform;
      }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = criticalStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  return null;
};

export default CriticalCSS;