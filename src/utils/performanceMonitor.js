// Performance monitoring utilities

export class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.initObservers();
  }

  initObservers() {
    // Monitor Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.lcp = lastEntry.startTime;
          this.reportMetric('LCP', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitor First Input Delay (FID)
        new PerformanceObserver((entryList) => {
          const firstEntry = entryList.getEntries()[0];
          this.metrics.fid = firstEntry.processingStart - firstEntry.startTime;
          this.reportMetric('FID', this.metrics.fid);
        }).observe({ entryTypes: ['first-input'] });

        // Monitor Cumulative Layout Shift (CLS)
        new PerformanceObserver((entryList) => {
          let clsValue = 0;
          entryList.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.reportMetric('CLS', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('Performance monitoring not supported');
      }
    }
  }

  reportMetric(name, value) {
    // Only log in development
    if (import.meta.env.DEV) {
      console.log(`${name}: ${Math.round(value)}${name === 'CLS' ? '' : 'ms'}`);
    }
  }

  getMetrics() {
    return this.metrics;
  }
}

// Initialize performance monitoring
export const initPerformanceMonitoring = () => {
  return new PerformanceMonitor();
};