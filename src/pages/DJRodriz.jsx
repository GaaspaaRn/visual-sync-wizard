import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Instagram, Youtube, Music } from 'lucide-react';
import djRodrizImage from '../assets/djrodriz.webp';

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
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
      color: 'white',
      overflow: 'hidden',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Background Animation - Gruv Label Style */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, rgba(0, 255, 255, 0.05), rgba(0, 255, 255, 0.1))',
          animation: 'pulse 6s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '20rem',
          height: '20rem',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 8s infinite ease-in-out'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '25rem',
          height: '25rem',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 10s infinite ease-in-out reverse'
        }}></div>
      </div>

      <motion.div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem 1rem'
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          <motion.div
            style={{
              position: 'relative',
              display: 'inline-block',
              marginBottom: '2rem'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00ffff, #00cccc)',
              padding: '4px',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img 
                  src={djRodrizImage} 
                  alt="DJ Rodriz"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
            </div>
            <motion.div
              style={{
                position: 'absolute',
                inset: '-8px',
                background: 'linear-gradient(135deg, #00ffff, #00cccc)',
                borderRadius: '50%',
                filter: 'blur(15px)',
                opacity: 0.4,
                zIndex: -1
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.h1 
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif",
              background: 'linear-gradient(135deg, #00ffff, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
            }}
            variants={itemVariants}
          >
            DJ Rodriz
          </motion.h1>
          
          <motion.p 
            style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '300'
            }}
            variants={itemVariants}
          >
            Iniciou sua trajetória musical em 2023, aos 16 anos, produzindo seus próprios sons e sempre buscando inovação em suas criações. Atualmente, com 18 anos, vem conquistando seu espaço no cenário, com colaborações ao lado de nomes de peso da cena.
          </motion.p>
        </motion.div>

        {/* Stats - Gruv Label Style */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          {[
            { label: "YouTube Inscritos", value: "1.79K", icon: Youtube, color: "#ff0000" },
            { label: "Visualizações", value: "1,882,169", icon: Play, color: "#00ffff" },
            { label: "Ouvintes/mês", value: "83.8K", icon: Music, color: "#1db954" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              variants={statsVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon style={{
                width: '2.5rem',
                height: '2.5rem',
                margin: '0 auto 1rem',
                color: stat.color
              }} />
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#00ffff',
                marginBottom: '0.5rem',
                fontFamily: "'Dystopian', 'Montserrat', sans-serif"
              }}>{stat.value}</div>
              <div style={{
                color: '#999',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Players Section */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          {/* YouTube Player */}
          <motion.div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(0, 255, 255, 0.2)'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: '#00ffff',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif"
            }}>
              🎵 Música no YouTube
            </h3>
            <div style={{
              aspectRatio: '16 / 9',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VRfHI0rjPuQ"
                title="DJ Rodriz - YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px' }}
              ></iframe>
            </div>
          </motion.div>

          {/* Spotify Player */}
          <motion.div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(0, 255, 255, 0.2)'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: '#1db954',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif"
            }}>
              🎧 Ouça no Spotify
            </h3>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)'
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

        {/* Social Media - Gruv Label Style */}
        <motion.div 
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
          variants={itemVariants}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            color: '#00ffff',
            fontFamily: "'Dystopian', 'Montserrat', sans-serif"
          }}>Redes Sociais</h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { icon: Youtube, label: "YouTube", color: "#ff0000", bg: "rgba(255, 0, 0, 0.1)" },
              { icon: Instagram, label: "Instagram", color: "#e4405f", bg: "rgba(228, 64, 95, 0.1)" },
              { icon: Music, label: "Spotify", color: "#1db954", bg: "rgba(29, 185, 84, 0.1)" }
            ].map((social, index) => (
              <motion.button
                key={index}
                style={{
                  background: social.bg,
                  color: social.color,
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: `1px solid ${social.color}30`,
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 10px 25px ${social.color}40`,
                  borderColor: `${social.color}80`
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon style={{ width: '1.8rem', height: '1.8rem', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>{social.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Button - Gruv Label Style */}
        <motion.div 
          style={{
            textAlign: 'center'
          }}
          variants={itemVariants}
        >
          <motion.button
            style={{
              background: 'linear-gradient(135deg, #00ffff, #00cccc)',
              color: '#000',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.5)',
              background: 'linear-gradient(135deg, #00cccc, #00ffff)'
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎤 CONTRATAR RODRIZ
          </motion.button>
        </motion.div>
      </motion.div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default DJRodriz;
