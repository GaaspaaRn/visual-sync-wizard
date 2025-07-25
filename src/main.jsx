
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from './AppRouter.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import { initPerformanceOptimizations } from './utils/performance'

// Initialize performance optimizations
initPerformanceOptimizations();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScroll>
      <AppRouter />
    </SmoothScroll>
  </StrictMode>,
)
