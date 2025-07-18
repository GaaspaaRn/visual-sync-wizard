import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Music, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import LazyImage from './LazyImage';
import { openWhatsApp } from '../utils/whatsapp';

const DJPageLayout = ({ dj, youtubeVideoId }) => {
  const getEmbedId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const embedId = getEmbedId(youtubeVideoId) || youtubeVideoId;

  return (
    <div className="dj-page">
      <CustomCursor />
      
      {/* Header */}
      <motion.header 
        className="header header-dj"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img 
                src="/logo-gruvlabel.png" 
                alt="Gruv Label Logo" 
                className="logo-image"
              />
            </Link>
          </motion.div>
          
          <Link to="/" className="back-button">
            <motion.button
              className="btn btn-back"
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={20} />
              VOLTAR
            </motion.button>
          </Link>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="dj-page-content">
        <div className="container">
          {/* Hero Section */}
          <motion.section 
            className="dj-hero"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="dj-hero-content">
              <motion.div 
                className="dj-avatar"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <LazyImage 
                  src={dj.image} 
                  alt={dj.name} 
                  className="dj-avatar-image" 
                />
                <div 
                  className="dj-avatar-glow" 
                  style={{ background: `radial-gradient(circle, ${dj.color}30, transparent)` }}
                />
              </motion.div>
              
              <motion.div 
                className="dj-info"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="dj-name">{dj.name}</h1>
                <div className="dj-stats-horizontal">
                  <div className="dj-stat">
                    <span className="dj-stat-number">{dj.stats.youtubeSubscribers}</span>
                    <span className="dj-stat-label">Inscritos</span>
                  </div>
                  <div className="dj-stat">
                    <span className="dj-stat-number">{dj.stats.youtubeViews}</span>
                    <span className="dj-stat-label">Views</span>
                  </div>
                  <div className="dj-stat">
                    <span className="dj-stat-number">{dj.stats.youtubeVideos}</span>
                    <span className="dj-stat-label">Vídeos</span>
                  </div>
                  {dj.id !== 'digo' && (
                    <div className="dj-stat">
                      <span className="dj-stat-number">{dj.stats.spotifyMonthly}</span>
                      <span className="dj-stat-label">Ouvintes/mês</span>
                    </div>
                  )}
                </div>
                
                <div className="dj-social-links">
                  <motion.a 
                    href={dj.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dj-social-link youtube"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Youtube size={24} />
                    <span>YouTube</span>
                  </motion.a>
                  <motion.a 
                    href={dj.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dj-social-link instagram"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram size={24} />
                    <span>Instagram</span>
                  </motion.a>
                  <motion.a 
                    href={dj.spotifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="dj-social-link spotify"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Music size={24} />
                    <span>Spotify</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Bio Section */}
          <motion.section 
            className="dj-bio-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">BIOGRAFIA</h2>
            <p className="dj-bio">{dj.bio}</p>
          </motion.section>

          {/* Media Section */}
          <motion.section 
            className="dj-media-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="media-grid">
              {/* YouTube Video */}
              <div className="media-item">
                <h3 className="media-title">ÚLTIMO VIDEO</h3>
                <div className="youtube-player">
                  <iframe
                    src={`https://www.youtube.com/embed/${embedId}`}
                    title={`${dj.name} - YouTube Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Spotify Player */}
              <div className="media-item">
                <h3 className="media-title">MÚSICA MAIS OUVIDA</h3>
                <div className="spotify-player">
                  <iframe
                    data-testid="embed-iframe"
                    style={{borderRadius: '12px'}}
                    src={dj.spotifyEmbed}
                    width="100%"
                    height="120"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${dj.name} - Spotify Track`}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contract Section */}
          <motion.section 
            className="dj-contract-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="contract-card">
              <h2 className="contract-title">INTERESSADO EM CONTRATAR {dj.artistName.replace('DJ ', '').toUpperCase()}?</h2>
              <p className="contract-description">
                Entre em contato conosco via WhatsApp e garante o melhor DJ para seu evento!
              </p>
              <motion.button 
                onClick={() => openWhatsApp(`Olá, gostaria de saber mais sobre o ${dj.artistName}.`)}
                className="btn btn-contract-page"
                style={{ background: dj.color }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTRATAR {dj.artistName.replace('DJ ', '').toUpperCase()}
              </motion.button>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default DJPageLayout;