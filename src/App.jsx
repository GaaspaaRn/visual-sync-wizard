import React, { useState, useEffect } from 'react';
import './App.css';

// Import artist images
import djLucasHenriqueImg from './assets/djlucashenrique.webp';
import djZatelliImg from './assets/djzatelli_1.webp';
import djRodrizImg from './assets/djrodriz.webp';
import djDigoIdgImg from './assets/djdigoidg.webp';

function App() {
  const [selectedDJ, setSelectedDJ] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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

  const openWhatsApp = (message) => {
    const phoneNumber = '5547988625307';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrollPosition > 50 ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <span className="logo-text">GRUV</span>
            <span className="logo-accent">LABEL</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="nav desktop-nav">
            <a href="#home" className="nav-link">INÍCIO</a>
            <a href="#artists" className="nav-link">ARTISTAS</a>
            <a href="#about" className="nav-link">SOBRE</a>
            <button 
              onClick={() => openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.')}
              className="nav-link contact-btn"
            >
              CONTRATE
            </button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMobileMenu}>INÍCIO</a>
          <a href="#artists" className="nav-link" onClick={closeMobileMenu}>ARTISTAS</a>
          <a href="#about" className="nav-link" onClick={closeMobileMenu}>SOBRE</a>
          <button 
            onClick={() => {
              openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.');
              closeMobileMenu();
            }}
            className="nav-link contact-btn"
          >
            CONTRATE
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-main">GRUV LABEL</span>
              <span className="hero-title-sub">Agenciamento de Artistas Megafunk</span>
            </h1>
            <p className="hero-description">
              Profissionalismo, Criatividade e Resultados para sua Carreira
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{Math.round(totalStats.subscribers / 1000)}K+</span>
                <span className="stat-label">Inscritos</span>
              </div>
              <div className="stat">
                <span className="stat-number">{Math.round(totalStats.views / 1000000)}M+</span>
                <span className="stat-label">Visualizações</span>
              </div>
              <div className="stat">
                <span className="stat-number">{totalStats.videos}+</span>
                <span className="stat-label">Vídeos</span>
              </div>
              <div className="stat">
                <span className="stat-number">{Math.round(totalStats.monthly / 1000)}K+</span>
                <span className="stat-label">Ouvintes/mês</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button 
                onClick={() => openWhatsApp('Olá, gostaria de saber mais sobre a Gruv Label.')}
                className="btn btn-primary"
              >
                CONTRATE AGORA
              </button>
              <a href="#artists" className="btn btn-secondary">NOSSOS ARTISTAS</a>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="artists">
        <div className="container">
          <h2 className="section-title">NOSSOS ARTISTAS</h2>
          <div className="artists-grid">
            {djs.map((dj) => (
              <div 
                key={dj.id} 
                className="artist-card"
                onClick={() => setSelectedDJ(dj)}
                style={{ '--accent-color': dj.color }}
              >
                <div className="artist-image">
                  <img src={dj.image} alt={dj.name} className="artist-photo" />
                </div>
                <div className="artist-info">
                  <h3 className="artist-name">{dj.name}</h3>
                  <div className="artist-stats">
                    <span>{dj.stats.youtubeSubscribers} inscritos</span>
                    <span>{dj.stats.youtubeViews} views</span>
                  </div>
                  <div className="artist-social">
                    <a href={dj.youtube} target="_blank" rel="noopener noreferrer" className="social-link youtube">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href={dj.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href={dj.spotifyUrl} target="_blank" rel="noopener noreferrer" className="social-link spotify">
                      <i className="fab fa-spotify"></i>
                    </a>
                  </div>
                  <button className="btn btn-artist" style={{ background: dj.color }}>
                    VER PERFIL
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">SOBRE A GRUV LABEL</h2>
              <p>
                A <strong>Gruv Label</strong> é uma agência especializada em bookings e agenciamento de artistas, 
                com foco inicial nos talentosos DJs de megafunk da cidade de Joinville (SC).
              </p>
              <p>
                Adotamos um modelo 360°, oferecendo um suporte completo que vai desde o fechamento de datas 
                de shows até a gestão de carreira, cuidado com a imagem do artista, assessoria de conteúdo e marketing.
              </p>
              <div className="services-grid">
                <div className="service">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Fechamento de Shows</span>
                </div>
                <div className="service">
                  <i className="fas fa-chart-line"></i>
                  <span>Gestão de Carreira</span>
                </div>
                <div className="service">
                  <i className="fas fa-bullhorn"></i>
                  <span>Marketing Digital</span>
                </div>
                <div className="service">
                  <i className="fas fa-video"></i>
                  <span>Produção de Conteúdo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">FALE CONOSCO</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Interessado em contratar nossos artistas?</h3>
              <p>Entre em contato conosco e vamos fazer seu evento ser inesquecível!</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <i className="fab fa-instagram"></i>
                  <a href="https://www.instagram.com/gruvlabel" target="_blank" rel="noopener noreferrer">
                    @gruvlabel
                  </a>
                </div>
                <div className="contact-method">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+5547988625307">(47) 9 8862-5307</a>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Seu Nome" required />
              <input type="email" placeholder="Seu Email" required />
              <input type="tel" placeholder="Seu Telefone" />
              <select required>
                <option value="">Selecione o Artista</option>
                {djs.map(dj => (
                  <option key={dj.id} value={dj.name}>{dj.name}</option>
                ))}
              </select>
              <textarea placeholder="Detalhes do Evento" rows="4"></textarea>
              <button type="submit" className="btn btn-primary">ENVIAR SOLICITAÇÃO</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="logo-text">GRUV</span>
              <span className="logo-accent">LABEL</span>
            </div>
            <p>&copy; 2025 Gruv Label. Todos os direitos reservados.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/gruvlabel" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Artist Modal */}
      {selectedDJ && (
        <div className="modal-overlay" onClick={() => setSelectedDJ(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDJ(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            {/* Sticky Contratar Button for Mobile */}
            <div className="modal-sticky-cta">
              <button 
                className="btn btn-primary btn-sticky"
                style={{ background: selectedDJ.color }}
                onClick={() => {
                  openWhatsApp(`Olá, gostaria de saber mais sobre o ${selectedDJ.artistName}.`);
                }}
              >
                CONTRATAR {selectedDJ.artistName.toUpperCase()}
              </button>
            </div>
            
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-avatar">
                  <img src={selectedDJ.image} alt={selectedDJ.name} className="modal-photo" />
                </div>
                <div className="modal-info">
                  <h2>{selectedDJ.name}</h2>
                  <p>{selectedDJ.bio}</p>
                  <div className="modal-stats">
                    <div className="modal-stat">
                      <span className="modal-stat-number">{selectedDJ.stats.youtubeSubscribers}</span>
                      <span className="modal-stat-label">YouTube Inscritos</span>
                    </div>
                    <div className="modal-stat">
                      <span className="modal-stat-number">{selectedDJ.stats.youtubeViews}</span>
                      <span className="modal-stat-label">Visualizações</span>
                    </div>
                    <div className="modal-stat">
                      <span className="modal-stat-number">{selectedDJ.stats.spotifyMonthly}</span>
                      <span className="modal-stat-label">Ouvintes/mês</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-section">
                  <h3>Música Mais Ouvida</h3>
                  <div className="spotify-player" dangerouslySetInnerHTML={{ __html: selectedDJ.spotifyEmbed }} />
                </div>
                
                <div className="modal-section">
                  <h3>Redes Sociais</h3>
                  <div className="modal-social">
                    <a href={selectedDJ.youtube} target="_blank" rel="noopener noreferrer" className="modal-social-link youtube">
                      <i className="fab fa-youtube"></i>
                      <span>YouTube</span>
                    </a>
                    <a href={selectedDJ.instagram} target="_blank" rel="noopener noreferrer" className="modal-social-link instagram">
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a href={selectedDJ.spotifyUrl} target="_blank" rel="noopener noreferrer" className="modal-social-link spotify">
                      <i className="fab fa-spotify"></i>
                      <span>Spotify</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Desktop Contratar Button */}
              <div className="modal-footer desktop-only">
                <button 
                  className="btn btn-primary btn-large"
                  style={{ background: selectedDJ.color }}
                  onClick={() => {
                    openWhatsApp(`Olá, gostaria de saber mais sobre o ${selectedDJ.artistName}.`);
                  }}
                >
                  CONTRATAR {selectedDJ.artistName.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
