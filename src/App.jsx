import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram, Music, Calendar, TrendingUp, Megaphone, Video } from 'lucide-react';
import './App.css';

// Import components
import CustomCursor from './components/CustomCursor';
import OptimizedImage from './components/OptimizedImage';
import RevealOnScroll from './components/RevealOnScroll';
import LoadingScreen from './components/LoadingScreen';
import StructuredData from './components/StructuredData';

// Import data and utils
import { djs, getTotalStats } from './data/djs';
import { openWhatsApp } from './utils/whatsapp';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  // Get total stats
  const totalStats = getTotalStats();
  
  // Smooth scroll setup
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Optimize loading time
    const timer = setTimeout(() => setIsLoading(false), 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Loading screen
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      <StructuredData type="website" />
      <CustomCursor />
      
      {/* Header */}
      <motion.header 
        className={`header ${scrollPosition > 150 ? 'header-scrolled' : ''}`}
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
            <OptimizedImage 
              src="/logo-gruvlabel.png" 
              alt="Gruv Label Logo" 
              className="logo-image"
              priority={true}
              width="120"
              height="40"
            />
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </motion.button>
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <motion.a 
              href="#home" 
              className="nav-link"
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              INÍCIO
            </motion.a>
            <motion.a 
              href="#artists" 
              className="nav-link"
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('artists');
              }}
            >
              ARTISTAS
            </motion.a>
            <motion.a 
              href="#about" 
              className="nav-link"
              whileHover={{ y: -2 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              SOBRE
            </motion.a>
            <motion.button 
              onClick={() => openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.')}
              className="nav-link contact-btn"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTRATE
            </motion.button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a 
                href="#home" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                  closeMobileMenu();
                }}
                whileHover={{ x: 10 }}
              >
                INÍCIO
              </motion.a>
              <motion.a 
                href="#artists" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('artists');
                  closeMobileMenu();
                }}
                whileHover={{ x: 10 }}
              >
                ARTISTAS
              </motion.a>
              <motion.a 
                href="#about" 
                className="nav-link" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                  closeMobileMenu();
                }}
                whileHover={{ x: 10 }}
              >
                SOBRE
              </motion.a>
              <motion.button 
                onClick={() => {
                  openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.');
                  closeMobileMenu();
                }}
                className="nav-link contact-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTRATE
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="hero">
      {/* Video Background */}
        <div className="hero-video">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="hero-video-element"
            poster=""
            preload="metadata"
            loading="lazy"
          >
            <source src="./videos/gruvlabel-djzatelli.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <motion.div 
          className="hero-bg"
          style={{ y: heroY }}
        />
        <div className="container">
          <motion.div 
            className="hero-content"
            style={{ opacity: heroOpacity }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span 
                className="hero-title-main"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                gruv label
              </motion.span>
              <motion.span 
                className="hero-title-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Agenciamento de Artistas <span className="sr-only">Megafunk</span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Profissionalismo, Criatividade e Resultados nunca vistos antes
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: `${Math.round(totalStats.subscribers / 1000)}K+`, label: 'Inscritos' },
                { number: '7M+', label: 'Visualizações' },
                { number: `${totalStats.videos}+`, label: 'Vídeos' },
                { number: '135K+', label: 'Ouvintes/mês' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.button 
                onClick={() => openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.')}
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTRATE AGORA
              </motion.button>
              <motion.a 
                href="#artists" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('artists');
                }}
              >
                NOSSOS ARTISTAS
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="artists">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title">NOSSOS ARTISTAS</h2>
          </RevealOnScroll>
          
          <div className="artists-grid">
            {djs.map((dj, index) => (
              <RevealOnScroll key={dj.id} delay={index * 0.1}>
                <motion.div 
                  className="artist-card"
                  style={{ '--accent-color': dj.color }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div 
                    className="artist-image"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <OptimizedImage 
                      src={dj.image} 
                      alt={dj.name} 
                      className="artist-photo"
                      width="300"
                      height="300"
                    />
                  </motion.div>
                  
                  <div className="artist-info">
                    <h3 className="artist-name">{dj.name}</h3>
                    <div className="artist-stats">
                      {dj.id !== 'diguera' && <span>{dj.stats.spotifyMonthly} ouvintes/mês</span>}
                      <span>{dj.stats.youtubeSubscribers} inscritos</span>
                      <span>{dj.stats.youtubeViews} views</span>
                    </div>
                    
                    <div className="artist-social">
                      <motion.a 
                        href={dj.youtube} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link youtube"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Youtube size={18} />
                      </motion.a>
                      <motion.a 
                        href={dj.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link instagram"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram size={18} />
                      </motion.a>
                      <motion.a 
                        href={dj.spotifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="social-link spotify"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Music size={18} />
                      </motion.a>
                    </div>
                    
                    <div className="artist-buttons">
                      <motion.button 
                        className="btn btn-artist btn-profile" 
                        style={{ background: dj.color }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `/${dj.id}`;
                        }}
                      >
                        VER PERFIL
                      </motion.button>
                      <motion.button 
                        className="btn btn-artist btn-contract" 
                        style={{ background: `linear-gradient(135deg, hsl(180, 100%, 50%, 0.5), hsl(180, 100%, 50%))` }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(`Olá, gostaria de saber mais sobre o ${dj.artistName}.`);
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        CONTRATAR {dj.artistName.replace('DJ ', '').toUpperCase()}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <RevealOnScroll>
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title">SOBRE A GRUV LABEL</h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  A <strong>Gruv Label</strong> é uma agência especializada em bookings e agenciamento de artistas.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Adotamos um modelo 360°, oferecendo um suporte completo que vai desde o fechamento de datas 
                  de shows até a gestão de carreira, cuidado com a imagem do artista, assessoria de conteúdo e marketing.
                </motion.p>
                
                <div className="services-grid">
                  {[
                    { Icon: Calendar, text: 'Fechamento de Shows' },
                    { Icon: TrendingUp, text: 'Gestão de Carreira' },
                    { Icon: Megaphone, text: 'Marketing Digital' },
                    { Icon: Video, text: 'Produção de Conteúdo' }
                  ].map((service, index) => (
                    <motion.div 
                      key={index}
                      className="service"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      viewport={{ once: true }}
                     >
                      <service.Icon size={32} style={{ color: '#00ffff', marginBottom: '0.5rem' }} />
                      <span>{service.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>


      {/* Social Media Section */}
      <section id="contact" className="contact">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title">CONTATO</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.2}>
            <div className="social-buttons">
              <motion.a
                href="https://www.instagram.com/gruvlabel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-button instagram"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={24} />
                <span>@gruvlabel</span>
              </motion.a>
              
              <motion.button
                onClick={() => openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.')}
                className="social-button whatsapp"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </motion.button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <RevealOnScroll>
            <div className="footer-content">
              <div className="footer-logo">
                <img 
                  src="/logo-gruvlabel.png" 
                  alt="Gruv Label Logo" 
                  className="footer-logo-image"
                />
              </div>
              <p>&copy; 2025 Gruv Label. Todos os direitos reservados.</p>
              <div className="footer-social">
                <motion.a 
                  href="https://www.instagram.com/gruvlabel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </footer>

    </div>
  );
}

export default App;