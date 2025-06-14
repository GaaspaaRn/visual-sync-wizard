
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import './App.css';

// Import artist images with lazy loading
const djLucasHenriqueImg = new URL('./assets/djlucashenrique.webp', import.meta.url).href;
const djZatelliImg = new URL('./assets/djzatelli_1.webp', import.meta.url).href;
const djRodrizImg = new URL('./assets/djrodriz.webp', import.meta.url).href;
const djDigoIdgImg = new URL('./assets/djdigoidg.webp', import.meta.url).href;

// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .artist-card, .social-link');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  
  return (
    <motion.div
      className="custom-cursor"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
};

// Lazy loading image component
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={imgRef} className={className} {...props}>
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={className}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

// Reveal animation component
const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [selectedDJ, setSelectedDJ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Smooth scroll setup
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    
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

  const djs = [
    {
      id: 'lucas',
      name: 'DJ Lucas Henrique',
      artistName: 'Lucas Henrique',
      image: djLucasHenriqueImg,
      youtube: 'https://www.youtube.com/channel/UCnvOrXyqGdK2AFrYcAQAwyg',
      instagram: 'https://www.instagram.com/djlucashenrique_/',
      spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cm0T95hVIgR9IKmz76prJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      spotifyUrl: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      topTrack: 'MEGA PROMISCUOUS',
      stats: {
        youtubeSubscribers: '8.78K',
        youtubeViews: '2,688,765',
        youtubeVideos: '61',
        spotifyMonthly: '15.2K'
      },
      bio: 'DJ e produtor musical especializado em megafunk, natural de Joinville, Santa Catarina. Com um estilo único e exclusivo, Lucas Henrique vem conquistando seu espaço na cena musical.',
      color: '#ff0080'
    },
    {
      id: 'zatelli',
      name: 'DJ Zatelli',
      artistName: 'Zatelli',
      image: djZatelliImg,
      youtube: 'https://www.youtube.com/@DjZatelli',
      instagram: 'https://www.instagram.com/djzatelli/',
      spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3q20ZeAbg7FvRr7dbWpeV1?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      spotifyUrl: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      topTrack: 'MEGA FUNK HOJE EU QUERO FUDER',
      stats: {
        youtubeSubscribers: '6.25K',
        youtubeViews: '1,547,336',
        youtubeVideos: '56',
        spotifyMonthly: '8.9K'
      },
      bio: 'Thiago Correia, nascido e criado na cidade de Joinville (SC), começou a se envolver com a cena do Mega Funk em 2021, criando elementos da música eletrônica.',
      color: '#00ff80'
    },
    {
      id: 'rodriz',
      name: 'DJ Rodriz',
      artistName: 'Rodriz',
      image: djRodrizImg,
      youtube: 'https://www.youtube.com/@djrodriz1',
      instagram: 'https://www.instagram.com/rodriz.wav/?hl=pt-br',
      spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0cm0T95hVIgR9IKmz76prJ?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      spotifyUrl: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      topTrack: 'MEGA FUNK SUSTENTA',
      stats: {
        youtubeSubscribers: '1.66K',
        youtubeViews: '565,872',
        youtubeVideos: '64',
        spotifyMonthly: '4.2K'
      },
      bio: 'Produtor emergente na cena do megafunk, conhecido por suas batidas inovadoras e colaborações com outros artistas da região Sul.',
      color: '#8000ff'
    },
    {
      id: 'digo',
      name: 'Digo IDG',
      artistName: 'Digo IDG',
      image: djDigoIdgImg,
      youtube: 'https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ',
      instagram: 'https://www.instagram.com/digoidg/',
      spotifyEmbed: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3q20ZeAbg7FvRr7dbWpeV1?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      spotifyUrl: 'https://open.spotify.com/artist/5K4W6rqBFWDnAN6FQUkS6x',
      topTrack: 'Mega Senta Fumadona',
      stats: {
        youtubeSubscribers: '2.45K',
        youtubeViews: '560,678',
        youtubeVideos: '47',
        spotifyMonthly: '2.8K'
      },
      bio: 'Artista versátil que combina elementos do funk tradicional com a energia do megafunk, criando um som único e envolvente.',
      color: '#ff8000'
    }
  ];

  const totalStats = {
    subscribers: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.youtubeSubscribers.replace('K', '')) * 1000, 0),
    views: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.youtubeViews.replace(/,/g, '')), 0),
    videos: djs.reduce((acc, dj) => acc + parseInt(dj.stats.youtubeVideos), 0),
    monthly: djs.reduce((acc, dj) => acc + parseFloat(dj.stats.spotifyMonthly.replace('K', '')) * 1000, 0)
  };

  const openWhatsApp = useCallback((message) => {
    const phoneNumber = '5547988625307';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Loading screen
  if (isLoading) {
    return (
      <motion.div 
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loading-logo"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="logo-text">GRUV</span>
          <span className="logo-accent">LABEL</span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="app">
      <CustomCursor />
      
      {/* Header */}
      <motion.header 
        className={`header ${scrollPosition > 50 ? 'header-scrolled' : ''}`}
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
            <span className="logo-text">GRUV</span>
            <span className="logo-accent">LABEL</span>
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
          >
            <source src="/videos/gruvlabel-djzatelli.mp4" type="video/mp4" />
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
                GRUV LABEL
              </motion.span>
              <motion.span 
                className="hero-title-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Agenciamento de Artistas Megafunk
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Profissionalismo, Criatividade e Resultados para sua Carreira
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { number: `${Math.round(totalStats.subscribers / 1000)}K+`, label: 'Inscritos' },
                { number: `${Math.round(totalStats.views / 1000000)}M+`, label: 'Visualizações' },
                { number: `${totalStats.videos}+`, label: 'Vídeos' },
                { number: `${Math.round(totalStats.monthly / 1000)}K+`, label: 'Ouvintes/mês' }
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
                  onClick={() => setSelectedDJ(dj)}
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
                    <LazyImage 
                      src={dj.image} 
                      alt={dj.name} 
                      className="artist-photo" 
                    />
                  </motion.div>
                  
                  <div className="artist-info">
                    <h3 className="artist-name">{dj.name}</h3>
                    <div className="artist-stats">
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
                        <i className="fab fa-youtube"></i>
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
                        <i className="fab fa-instagram"></i>
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
                        <i className="fab fa-spotify"></i>
                      </motion.a>
                    </div>
                    
                    <motion.button 
                      className="btn btn-artist" 
                      style={{ background: dj.color }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      VER PERFIL
                    </motion.button>
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
                  A <strong>Gruv Label</strong> é uma agência especializada em bookings e agenciamento de artistas, 
                  com foco inicial nos talentosos DJs de megafunk da cidade de Joinville (SC).
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
                    { icon: 'fas fa-calendar-alt', text: 'Fechamento de Shows' },
                    { icon: 'fas fa-chart-line', text: 'Gestão de Carreira' },
                    { icon: 'fas fa-bullhorn', text: 'Marketing Digital' },
                    { icon: 'fas fa-video', text: 'Produção de Conteúdo' }
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
                      <i className="fas fa-check-circle"></i>
                      <span>{service.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <RevealOnScroll>
            <h2 className="section-title">FALE CONOSCO</h2>
          </RevealOnScroll>
          
          <div className="contact-content">
            <RevealOnScroll delay={0.2}>
              <div className="contact-info">
                <h3>Interessado em contratar nossos artistas?</h3>
                <p>Entre em contato conosco e vamos fazer seu evento ser inesquecível!</p>
                <div className="contact-methods">
                  <motion.div 
                    className="contact-method"
                    whileHover={{ x: 10 }}
                  >
                    <i className="fab fa-instagram"></i>
                    <a href="https://www.instagram.com/gruvlabel" target="_blank" rel="noopener noreferrer">
                      @gruvlabel
                    </a>
                  </motion.div>
                  <motion.div 
                    className="contact-method"
                    whileHover={{ x: 10 }}
                  >
                    <i className="fas fa-phone"></i>
                    <a href="tel:+5547988625307">(47) 9 8862-5307</a>
                  </motion.div>
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.4}>
              <form className="contact-form">
                <motion.input 
                  type="text" 
                  placeholder="Seu Nome" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input 
                  type="email" 
                  placeholder="Seu Email" 
                  required 
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input 
                  type="tel" 
                  placeholder="Seu Telefone" 
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.select 
                  required
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Selecione o Artista</option>
                  {djs.map(dj => (
                    <option key={dj.id} value={dj.name}>{dj.name}</option>
                  ))}
                </motion.select>
                <motion.textarea 
                  placeholder="Detalhes do Evento" 
                  rows="4"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button 
                  type="submit" 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ENVIAR SOLICITAÇÃO
                </motion.button>
              </form>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <RevealOnScroll>
            <div className="footer-content">
              <div className="footer-logo">
                <span className="logo-text">GRUV</span>
                <span className="logo-accent">LABEL</span>
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
                  <i className="fab fa-instagram"></i>
                </motion.a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </footer>

      {/* Artist Modal */}
      <AnimatePresence>
        {selectedDJ && (
          <motion.div 
            className="modal-overlay" 
            onClick={() => setSelectedDJ(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="modal" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.button 
                className="modal-close" 
                onClick={() => setSelectedDJ(null)}
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
                    <div className="modal-stats">
                      <div className="modal-stat">
                        <span className="modal-stat-number">{selectedDJ.stats.youtubeSubscribers}</span>
                        <span className="modal-stat-label">Inscritos</span>
                      </div>
                      <div className="modal-stat">
                        <span className="modal-stat-number">{selectedDJ.stats.youtubeViews}</span>
                        <span className="modal-stat-label">Views</span>
                      </div>
                      <div className="modal-stat">
                        <span className="modal-stat-number">{selectedDJ.stats.spotifyMonthly}</span>
                        <span className="modal-stat-label">Ouvintes/mês</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>Top Track: {selectedDJ.topTrack}</h3>
                  <div 
                    className="spotify-player" 
                    dangerouslySetInnerHTML={{ __html: selectedDJ.spotifyEmbed }}
                  />
                </motion.div>
                
                <motion.div 
                  className="modal-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3>Redes Sociais</h3>
                  <div className="modal-social">
                    <motion.a 
                      href={selectedDJ.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-social-link youtube"
                      whileHover={{ x: 5 }}
                    >
                      <i className="fab fa-youtube"></i>
                      <span>YouTube</span>
                    </motion.a>
                    <motion.a 
                      href={selectedDJ.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-social-link instagram"
                      whileHover={{ x: 5 }}
                    >
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </motion.a>
                    <motion.a 
                      href={selectedDJ.spotifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-social-link spotify"
                      whileHover={{ x: 5 }}
                    >
                      <i className="fab fa-spotify"></i>
                      <span>Spotify</span>
                    </motion.a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="modal-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button 
                    className="btn btn-primary btn-large"
                    style={{ background: selectedDJ.color }}
                    onClick={() => {
                      openWhatsApp(`Olá, gostaria de saber mais sobre o ${selectedDJ.artistName}.`);
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    CONTRATAR {selectedDJ.artistName.toUpperCase()}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
