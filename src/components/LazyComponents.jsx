import { lazy, Suspense } from 'react';

// Lazy load heavy components for better performance
const LazyRevealOnScroll = lazy(() => import('./RevealOnScroll'));
const LazyParallaxSection = lazy(() => import('./ParallaxSection'));
const LazyArtistModal = lazy(() => import('./ArtistModal'));

// Loading fallback component
const ComponentLoader = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-pulse w-full h-32 bg-secondary rounded-lg"></div>
  </div>
);

// Wrapper components with Suspense
export const RevealOnScrollLazy = ({ children, ...props }) => (
  <Suspense fallback={<ComponentLoader />}>
    <LazyRevealOnScroll {...props}>{children}</LazyRevealOnScroll>
  </Suspense>
);

export const ParallaxSectionLazy = ({ children, ...props }) => (
  <Suspense fallback={<ComponentLoader />}>
    <LazyParallaxSection {...props}>{children}</LazyParallaxSection>
  </Suspense>
);

export const ArtistModalLazy = (props) => (
  <Suspense fallback={<ComponentLoader />}>
    <LazyArtistModal {...props} />
  </Suspense>
);