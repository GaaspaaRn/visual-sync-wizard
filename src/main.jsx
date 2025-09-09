
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import { initPerformanceOptimizations } from './utils/performance'

// Initialize performance optimizations
initPerformanceOptimizations();

// Initialize critical resource hints and bundle optimization
import('./utils/criticalResourceHints').then(({ addCriticalResourceHints }) => {
  addCriticalResourceHints();
});

import('./utils/bundleOptimization').then(({ preloadCriticalChunks, monitorPerformance }) => {
  preloadCriticalChunks();
  monitorPerformance();
});

// Initialize performance monitoring
import('./utils/performanceMonitor').then(({ initPerformanceMonitoring }) => {
  initPerformanceMonitoring();
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <AppRouter />
    </SmoothScroll>
  </StrictMode>,
)
