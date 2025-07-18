import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Music } from 'lucide-react';
import LazyImage from './LazyImage';
import { openWhatsApp } from '../utils/whatsapp';

const ArtistModal = ({ selectedDJ, modalPosition, onClose }) => {
  if (!selectedDJ) return null;

  return (
    <motion.div 
      className="modal-overlay" 
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="modal" 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          top: `${modalPosition.top}px`,
          left: window.innerWidth <= 768 ? '16px' : `${modalPosition.left}px`,
          right: window.innerWidth <= 768 ? '16px' : 'auto',
          transform: 'none',
          zIndex: 10001
        }}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.button 
          className="modal-close" 
          onClick={onClose}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-times"></i>
        </motion.button>
        
        <div className="modal-content">
          <motion.div 
            className="modal-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="modal-avatar">
              <LazyImage 
                src={selectedDJ.image} 
                alt={selectedDJ.name} 
                className="modal-photo" 
              />
            </div>
            <div className="modal-info">
              <h2>{selectedDJ.name}</h2>
              <p>{selectedDJ.bio}</p>
              
              {/* Stats horizontais */}
              <div className="modal-stats-horizontal">
                <div className="modal-stat-item">
                  <span className="modal-stat-number">{selectedDJ.stats.youtubeSubscribers}</span>
                  <span className="modal-stat-label">YOUTUBE<br/>INSCRITOS</span>
                </div>
                <div className="modal-stat-item">
                  <span className="modal-stat-number">{selectedDJ.stats.youtubeViews}</span>
                  <span className="modal-stat-label">VISUALIZAÇÕES</span>
                </div>
                {selectedDJ.id !== 'digo' && (
                  <div className="modal-stat-item">
                    <span className="modal-stat-number">{selectedDJ.stats.spotifyMonthly}</span>
                    <span className="modal-stat-label">OUVINTES/MÊS</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="modal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Música Mais Ouvida</h3>
            <div className="spotify-player">
              <iframe
                data-testid="embed-iframe"
                style={{borderRadius: '12px'}}
                src={selectedDJ.spotifyEmbed}
                width="100%"
                height="160"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`${selectedDJ.name} - Spotify Track`}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="modal-section modal-social-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Redes Sociais</h3>
            <div className="modal-social-grid">
              <motion.a 
                href={selectedDJ.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-social-button youtube"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Youtube size={20} />
                <span>YouTube</span>
              </motion.a>
              <motion.a 
                href={selectedDJ.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-social-button instagram"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </motion.a>
              <motion.a 
                href={selectedDJ.spotifyUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="modal-social-button spotify"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Music size={20} />
                <span>Spotify</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Fixed Contract Button - mais transparente */}
        <motion.div 
          className="modal-cta-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="btn-contract-transparent"
            style={{ background: `linear-gradient(135deg, hsl(180, 100%, 50%, 0.5), hsl(180, 100%, 50%))` }}
            onClick={() => {
              openWhatsApp(`Olá, gostaria de saber mais sobre o ${selectedDJ.artistName}.`);
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTRATAR {selectedDJ.artistName.toUpperCase()}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ArtistModal;