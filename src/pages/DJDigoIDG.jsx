import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Instagram, Youtube, Music, MessageCircle } from 'lucide-react';
import digoIDGImage from '../assets/djdigoidg.webp';

const DigoIDG = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
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
      fontFamily: "'Montserrat', sans-serif",
      position: 'relative'
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

      {/* Floating Contract Button */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 1000
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <a href="https://api.whatsapp.com/send?phone=5547988625307&text=Ol%C3%A1%2C%20gostaria%20de%20contratar%20o%20Digo%20IDG." target="_blank" rel="noopener noreferrer">
          <motion.button
            style={{
              background: 'linear-gradient(135deg, #00ffff, #00cccc)',
              color: '#000',
              padding: '1rem 1.5rem',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0, 255, 255, 0.4)',
              transition: 'all 0.3s ease',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.6)',
              background: 'linear-gradient(135deg, #00cccc, #00ffff)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle style={{ width: '1.2rem', height: '1.2rem' }} />
            CONTRATAR DIGO IDG
          </motion.button>
        </a>
      </motion.div>

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
        {/* Header - Simplified */}
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
              width: '150px',
              height: '150px',
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
                  src={digoIDGImage} 
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
              fontSize: 'clamp(2rem, 6vw, 3rem)',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
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
              fontSize: '1rem',
              color: '#999',
              fontWeight: '300'
            }}
            variants={itemVariants}
          >
            @digoidg
          </motion.p>
        </motion.div>

        {/* Social Media Icons - Horizontal */}
        <motion.div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
          variants={itemVariants}
        >
          <a href="https://open.spotify.com/intl-pt/artist/7ff4I1cuWy9xBpTaYeinvv" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(29, 185, 84, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(29, 185, 84, 0.3)',
                cursor: 'pointer'
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(29, 185, 84, 0.2)',
                borderColor: 'rgba(29, 185, 84, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Music style={{ width: '24px', height: '24px', color: '#1db954' }} />
            </motion.div>
          </a>
          
          <a href="https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 0, 0, 0.3)',
                cursor: 'pointer'
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(255, 0, 0, 0.2)',
                borderColor: 'rgba(255, 0, 0, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Youtube style={{ width: '24px', height: '24px', color: '#ff0000' }} />
            </motion.div>
          </a>
          
          <a href="https://www.instagram.com/digoidg/" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(228, 64, 95, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(228, 64, 95, 0.3)',
                cursor: 'pointer'
              }}
              whileHover={{
                scale: 1.1,
                background: 'rgba(228, 64, 95, 0.2)',
                borderColor: 'rgba(228, 64, 95, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram style={{ width: '24px', height: '24px', color: '#e4405f' }} />
            </motion.div>
          </a>
        </motion.div>

        {/* Stats - Compact */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '3rem',
            maxWidth: '400px',
            margin: '0 auto 3rem'
          }}
          variants={itemVariants}
        >
          {[
            { label: "YouTube Inscritos", value: "2.46K", icon: Youtube, color: "#ff0000" },
            { label: "Visualizações", value: "627,512", icon: Play, color: "#00ffff" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              style={{
                background: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '1.5rem 1rem',
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
                width: '1.5rem',
                height: '1.5rem',
                margin: '0 auto 0.5rem',
                color: stat.color
              }} />
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#00ffff',
                marginBottom: '0.25rem',
                fontFamily: "'Dystopian', 'Montserrat', sans-serif"
              }}>{stat.value}</div>
              <div style={{
                color: '#999',
                fontSize: '0.7rem',
                fontWeight: '500'
              }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Spotify Player - Featured */}
        <motion.div 
          style={{
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
          variants={itemVariants}
        >
          <motion.div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(0, 255, 255, 0.2)'
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              textAlign: 'center',
              color: '#1db954',
              fontFamily: "'Dystopian', 'Montserrat', sans-serif"
            }}>
              🎧 Música Mais Ouvida
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

        {/* YouTube Player */}
        <motion.div 
          style={{
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
          variants={itemVariants}
        >
          <motion.div
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(0, 255, 255, 0.2)'
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 15px 40px rgba(0, 255, 255, 0.15)'
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
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
        </motion.div>

        {/* Instagram Post */}
        <motion.div 
          style={{
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
          variants={itemVariants}
        >
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textAlign: 'center',
            color: '#00ffff',
            fontFamily: "'Dystopian', 'Montserrat', sans-serif"
          }}>
            📸 Última Publicação no Instagram
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '1.5rem',
            border: '1px solid rgba(0, 255, 255, 0.2)'
          }}>
            <div dangerouslySetInnerHTML={{
              __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DJsOJhKOzBN/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DJsOJhKOzBN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DJsOJhKOzBN/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Uma publicação compartilhada por Rodrigo Digo IDG (@digoidg)</a></p></div></blockquote>`
            }} />
          </div>
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

