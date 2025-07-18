import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, Youtube, Music } from 'lucide-react';
import djDigoIdgImage from '../assets/djdigoidg.webp';

const DigoIDG = () => {
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
                  src={djDigoIdgImage} 
                  alt="Digo IDG"
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
            Digo IDG
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
            Rodrigo (23 anos), natural de Joinville, Santa Catarina. Digo IDG começou sua carreira no Mega Funk no final de 2019. Com o tempo, foi criando seu estilo e conquistando seu espaço, entre 2020 e 2021 ganhou reconhecimento do público e da comunidade. Digo IDG é um artista versátil que segue crescendo na cena do Mega Funk, sempre buscando entregar o melhor em cada apresentação e evoluindo como artista.
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
            { label: "YouTube Inscritos", value: "2.46K", icon: Youtube, color: "#ff0000" },
            { label: "Visualizações", value: "627,512", icon: Play, color: "#00ffff" },
            { label: "Ouvintes/mês", value: "0.2K", icon: Music, color: "#1db954" }
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
                src="https://www.youtube.com/embed/J4SezJtNvq8"
                title="Digo IDG - YouTube"
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
                src="https://open.spotify.com/embed/track/2UR8zmsZgwCJ0dwnlpY9KN?utm_source=generator" 
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
            <a href="https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ" target="_blank" rel="noopener noreferrer">
              <motion.button
                style={{
                  background: 'rgba(255, 0, 0, 0.1)',
                  color: '#ff0000',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 10px 25px rgba(255, 0, 0, 0.4)',
                  borderColor: 'rgba(255, 0, 0, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube style={{ width: '1.8rem', height: '1.8rem', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>YouTube</div>
              </motion.button>
            </a>
            <a href="https://www.instagram.com/digoidg/" target="_blank" rel="noopener noreferrer">
              <motion.button
                style={{
                  background: 'rgba(228, 64, 95, 0.1)',
                  color: '#e4405f',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(228, 64, 95, 0.3)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 10px 25px rgba(228, 64, 95, 0.4)',
                  borderColor: 'rgba(228, 64, 95, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram style={{ width: '1.8rem', height: '1.8rem', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>Instagram</div>
              </motion.button>
            </a>
            <a href="https://open.spotify.com/intl-pt/artist/7ff4I1cuWy9xBpTaYeinvv" target="_blank" rel="noopener noreferrer">
              <motion.button
                style={{
                  background: 'rgba(29, 185, 84, 0.1)',
                  color: '#1db954',
                  padding: '1.2rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(29, 185, 84, 0.3)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 10px 25px rgba(29, 185, 84, 0.4)',
                  borderColor: 'rgba(29, 185, 84, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Music style={{ width: '1.8rem', height: '1.8rem', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: '600' }}>Spotify</div>
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* CTA Button - Gruv Label Style */}
        <motion.div 
          style={{
            textAlign: 'center'
          }}
          variants={itemVariants}
        >
          <a href="https://api.whatsapp.com/send?phone=5547997400088&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20Digo%20IDG." target="_blank" rel="noopener noreferrer">
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
            >
              🎤 CONTRATAR DIGO IDG
            </motion.button>
          </a>
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

export default DigoIDG;

