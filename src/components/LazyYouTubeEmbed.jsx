import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const LazyYouTubeEmbed = ({ videoId, title = "YouTube Video" }) => {
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
    <div ref={containerRef} style={{ minHeight: '150px' }}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <iframe
            width="100%"
            height="150"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px' }}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      ) : (
        <div style={{
          height: '150px',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ff0000'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>▶️</div>
            <div>Carregando vídeo...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;