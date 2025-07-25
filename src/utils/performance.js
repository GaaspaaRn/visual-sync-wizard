// Performance optimization utilities

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload hero video
  const videoLink = document.createElement('link');
  videoLink.rel = 'preload';
  videoLink.as = 'video';
  videoLink.href = '/videos/gruvlabel-djzatelli.mp4';
  videoLink.setAttribute('type', 'video/mp4');
  document.head.appendChild(videoLink);
  
  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.href = '/fonts/Dystopian-Regular.otf';
  fontLink.setAttribute('type', 'font/otf');
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);
};

// Remove unused CSS classes
export const removeUnusedCSS = () => {
  const styleSheets = Array.from(document.styleSheets);
  
  styleSheets.forEach(sheet => {
    try {
      const rules = Array.from(sheet.cssRules || sheet.rules);
      rules.forEach(rule => {
        if (rule.type === 1) { // CSS Rule
          const selector = rule.selectorText;
          if (selector && !document.querySelector(selector)) {
            // Remove unused rule
            const index = Array.from(sheet.cssRules).indexOf(rule);
            if (index > -1) {
              sheet.deleteRule(index);
            }
          }
        }
      });
    } catch (e) {
      // Cross-origin stylesheets can't be accessed
      console.log('Cannot access stylesheet:', e);
    }
  });
};

// Optimize animations for performance
export const optimizeAnimations = () => {
  // Disable animations on low-end devices
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    document.body.classList.add('reduce-motion');
  }
  
  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (document.hidden) {
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
      });
    } else {
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'running';
      });
    }
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Run optimizations after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      preloadCriticalResources();
      optimizeAnimations();
    });
  } else {
    lazyLoadImages();
    preloadCriticalResources();
    optimizeAnimations();
  }
  
  // Run CSS optimization after page load
  window.addEventListener('load', () => {
    setTimeout(removeUnusedCSS, 1000);
  });
};