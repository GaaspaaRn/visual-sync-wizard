import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyInstagramEmbed = ({ postUrl, embedCode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && isLoaded) {
      // Load Instagram embed script only when needed
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);

      return () => {
        try {
          document.body.removeChild(script);
        } catch (e) {
          // Script already removed
        }
      };
    }
  }, [isInView, isLoaded]);

  return (
    <div ref={containerRef} style={{ minHeight: '400px', maxWidth: '540px', margin: '0 auto' }}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onAnimationComplete={() => setIsLoaded(true)}
        >
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              width: '100%'
            }}
            dangerouslySetInnerHTML={{ __html: embedCode }}
          />
        </motion.div>
      ) : (
        <div style={{
          height: '400px',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#e4405f'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📷</div>
            <div>Carregando post...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyInstagramEmbed;