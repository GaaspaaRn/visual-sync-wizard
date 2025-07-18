import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Instagram, Youtube, Music } from 'lucide-react';

const DJRodriz = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #1a202c, #000000, #2d3748)',
      color: 'white',
      overflow: 'hidden',
      padding: '2rem 0'
    }}>
      {/* Background Animation */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(6, 182, 212, 0.1), rgba(128, 0, 128, 0.1))',
          animation: 'pulse 4s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '24rem',
          height: '24rem',
          background: 'rgba(6, 182, 212, 0.2)',
          borderRadius: '9999px',
          filter: 'blur(3rem)',
          animation: 'bounce 3s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '24rem',
          height: '24rem',
          background: 'rgba(128, 0, 128, 0.2)',
          borderRadius: '9999px',
          filter: 'blur(3rem)',
          animation: 'bounce 3s infinite 1s'
        }}></div>
      </div>

      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
          variants={itemVariants}
        >
          <motion.div
            style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{
              width: '12rem',
              height: '12rem',
              margin: '0 auto',
              borderRadius: '9999px',
              background: 'linear-gradient(to right, #06b6d4, #800080)',
              padding: '0.25rem'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '9999px',
                background: '#1a202c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '10rem',
                  height: '10rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(to right, #06b6d4, #800080)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>
                  R
                </div>
              </div>
            </div>
            <motion.div
              style={{
                position: 'absolute',
                inset: '-1rem',
                background: 'linear-gradient(to right, #06b6d4, #800080)',
                borderRadius: '9999px',
                filter: 'blur(1rem)',
                opacity: 0.3
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.h1 
            style={{
              fontSize: '3.75rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(to right, #06b6d4, #800080)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            variants={itemVariants}
          >
            DJ Rodriz
          </motion.h1>
          
          <motion.p 
            style={{
              fontSize: '1.25rem',
              color: '#d1d5db',
              maxWidth: '48rem',
              margin: '0 auto',
              lineHeight: '1.625'
            }}
            variants={itemVariants}
          >
            Iniciou sua trajetória musical em 2023, aos 16 anos, produzindo seus próprios sons e sempre buscando inovação em suas criações. Atualmente, com 18 anos, vem conquistando seu espaço no cenário, com colaborações ao lado de nomes de peso da cena.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          {[
            { label: "YouTube Inscritos", value: "1.79K", icon: Youtube },
            { label: "Visualizações", value: "1,882,169", icon: Play },
            { label: "Ouvintes/mês", value: "83.8K", icon: Music }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{
                background: 'rgba(31, 41, 55, 0.5)',
                backdropFilter: 'blur(8px)',
                borderRadius: '1rem',
                padding: '2rem',
                textAlign: 'center',
                border: '1px solid rgba(75, 85, 99, 0.5)'
              }}
              variants={statsVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon style={{
                width: '3rem',
                height: '3rem',
                margin: '0 auto 1rem',
                color: '#06b6d4'
              }} />
              <div style={{
                fontSize: '1.875rem',
                fontWeight: 'bold',
                color: '#06b6d4',
                marginBottom: '0.5rem'
              }}>{stat.value}</div>
              <div style={{
                color: '#d1d5db',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.875rem'
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Players Section */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          {/* YouTube Player */}
          <motion.div
            style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(8px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(75, 85, 99, 0.5)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: '#06b6d4'
            }}>
              🎵 Música no YouTube
            </h3>
            <div style={{
              aspectRatio: '16 / 9',
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VRfHI0rjPuQ"
                title="DJ Rodriz - YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '0.75rem' }}
              ></iframe>
            </div>
          </motion.div>

          {/* Spotify Player */}
          <motion.div
            style={{
              background: 'rgba(31, 41, 55, 0.5)',
              backdropFilter: 'blur(8px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(75, 85, 99, 0.5)'
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: '#22c55e'
            }}>
              🎧 Ouça no Spotify
            </h3>
            <div style={{
              borderRadius: '0.75rem',
              overflow: 'hidden'
            }}>
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/track/1T0Za0ldouSRjRMH94SwWI?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          <h3 style={{
            fontSize: '2.25rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#06b6d4'
          }}>Redes Sociais</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem'
          }}>
            {[
              { icon: Youtube, label: "YouTube", color: "#ef4444", bg: "rgba(239, 68, 68, 0.2)" },
              { icon: Instagram, label: "Instagram", color: "#ec4899", bg: "rgba(236, 72, 153, 0.2)" },
              { icon: Music, label: "Spotify", color: "#22c55e", bg: "rgba(34, 197, 94, 0.2)" }
            ].map((social, index) => (
              <motion.button
                key={index}
                style={{
                  background: social.bg,
                  color: social.color,
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(75, 85, 99, 0.5)',
                  transition: 'all 0.3s ease-in-out'
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon style={{ width: '2rem', height: '2rem', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{social.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          style={{
            textAlign: 'center'
          }}
          variants={itemVariants}
        >
          <motion.button
            style={{
              background: 'linear-gradient(to right, #06b6d4, #800080)',
              color: 'white',
              padding: '1rem 3rem',
              borderRadius: '9999px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.3s ease-in-out'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎤 CONTRATAR RODRIZ
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DJRodriz;
