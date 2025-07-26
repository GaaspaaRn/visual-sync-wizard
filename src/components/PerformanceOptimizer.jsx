import React, { useEffect, Suspense } from 'react';

// Lazy load heavy components
const LazySpotifyEmbed = React.lazy(() => import('./LazySpotifyEmbed'));
const LazyYouTubeEmbed = React.lazy(() => import('./LazyYouTubeEmbed'));
const LazyInstagramEmbed = React.lazy(() => import('./LazyInstagramEmbed'));

const PerformanceOptimizer = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadFont = () => {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.href = '/fonts/Dystopian-Regular.otf';
      fontLink.type = 'font/otf';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Remove unused CSS (simplified version)
    const removeUnusedCSS = () => {
      const unusedSelectors = [
        '.unused-class',
        '.old-style'
      ];
      
      try {
        const sheets = Array.from(document.styleSheets);
        sheets.forEach(sheet => {
          try {
            const rules = Array.from(sheet.cssRules || []);
            rules.forEach((rule, index) => {
              if (rule.selectorText && unusedSelectors.some(selector => 
                rule.selectorText.includes(selector)
              )) {
                sheet.deleteRule(index);
              }
            });
          } catch (e) {
            // Cross-origin stylesheets can't be accessed
          }
        });
      } catch (e) {
        console.log('CSS optimization skipped:', e);
      }
    };

    preloadFont();
    optimizeImages();
    setTimeout(removeUnusedCSS, 1000);

    // Intersection Observer for animations
    const observeAnimations = () => {
      const animatedElements = document.querySelectorAll('[data-animate]');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      animatedElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    };

    const cleanup = observeAnimations();

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return <>{children}</>;
};

export { LazySpotifyEmbed, LazyYouTubeEmbed, LazyInstagramEmbed };
export default PerformanceOptimizer;