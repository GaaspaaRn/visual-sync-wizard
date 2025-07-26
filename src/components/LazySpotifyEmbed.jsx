import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazySpotifyEmbed = ({ trackId, title = "Spotify Player" }) => {
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

  return (
    <div ref={containerRef} style={{ minHeight: '152px' }}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe 
            data-testid="embed-iframe" 
            style={{ borderRadius: '12px' }} 
            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            title={title}
          />
        </motion.div>
      ) : (
        <div style={{
          height: '152px',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1db954'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎵</div>
            <div>Carregando player...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazySpotifyEmbed;