import React, { useEffect } from 'react';

const DJPageCSS = () => {
  useEffect(() => {
    const styles = `
      /* Critical CSS for DJ pages */
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
      }
      
      /* Optimize animations for performance */
      .animate-optimized {
        will-change: transform;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Reduce motion for accessibility */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .float, .pulse {
          animation: none !important;
        }
      }
      
      /* Lazy loading placeholder styles */
      .lazy-placeholder {
        background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 75%);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      /* Instagram embed mobile fix */
      @media (max-width: 768px) {
        .instagram-media {
          margin: 0 auto !important;
          max-width: 90% !important;
        }
      }
      
      /* Performance optimizations */
      .gpu-accelerated {
        transform: translateZ(0);
        will-change: transform;
      }
      
      /* Critical path styles */
      .dj-page-container {
        contain: layout style paint;
        content-visibility: auto;
      }
      
      .hero-section {
        contain: layout style;
        will-change: transform;
      }
    `;
    
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    return () => {
      try {
        document.head.removeChild(styleElement);
      } catch (e) {
        // Style element already removed
      }
    };
  }, []);
  
  return null;
};

export default DJPageCSS;