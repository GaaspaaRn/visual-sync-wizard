import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const DJDiguera = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = () => {
    const phone = "5547997644727";
    const message = "Contratar Diguera";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Diguera - DJ / Produtor | Mega Funk</title>
        <meta name="description" content="Diguera é um DJ e produtor musical de Joinville, SC, especializado em Mega Funk. Conhecido por seu estilo único e shows energéticos, Diguera é um nome em ascensão na cena da música eletrônica no Sul do Brasil." />
        <meta name="keywords" content="Diguera, DJ, Produtor, Mega Funk, Joinville, SC, Música Eletrônica, Shows, Eventos" />
        <meta name="author" content="Diguera" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gruvlabel.com/diguera" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Diguera - DJ / Produtor | Mega Funk" />
        <meta property="og:description" content="Energia e batidas únicas do Mega Funk. Conheça o trabalho de Diguera e contrate para seu evento." />
        <meta property="og:image" content="/src/assets/diguera-logo.png" />
        <meta property="og:url" content="https://gruvlabel.com/diguera" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Diguera" />
        
        {/* Twitter Card */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Diguera - DJ / Produtor | Mega Funk" />
        <meta property="twitter:description" content="Energia e batidas únicas do Mega Funk. Conheça o trabalho de Diguera e contrate para seu evento." />
        <meta property="twitter:image" content="/src/assets/diguera-logo.png" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicGroup",
            "name": "Diguera",
            "alternateName": "DJ Diguera",
            "description": "Diguera é um DJ e produtor musical de Joinville, SC, especializado em Mega Funk. Conhecido por seu estilo único e shows energéticos, Diguera é um nome em ascensão na cena da música eletrônica no Sul do Brasil.",
            "genre": "Mega Funk",
            "url": "https://gruvlabel.com/diguera",
            "image": "/src/assets/diguera-logo.png",
            "sameAs": [
              "https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM",
              "https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ",
              "https://www.instagram.com/diguerabr/"
            ],
            "potentialAction": {
              "@type": "ListenAction",
              "target": [
                {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM",
                  "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/IOSPlatform",
                    "http://schema.org/AndroidPlatform"
                  ]
                }
              ]
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-47-99764-4727",
              "contactType": "booking",
              "areaServed": ["BR-SC", "BR-PR", "BR-RS"],
              "availableLanguage": ["Portuguese"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Joinville",
              "addressRegion": "SC",
              "addressCountry": "BR"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-black text-gray-200 overflow-x-hidden">
        {/* Background Video */}
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/gruvlabel-djzatelli.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <img
                src="/src/assets/diguera-logo.png"
                alt="Logo Diguera"
                className="w-auto h-40 md:h-56 mx-auto mb-8 animate-fade-in-up"
              />
              <h1 className="text-green-400 text-2xl md:text-3xl font-bold tracking-wider mb-16 animate-fade-in-up" style={{ fontFamily: 'Orbitron, sans-serif', animationDelay: '0.2s' }}>
                DJ / PRODUTOR
              </h1>
            </div>
          </section>

          {/* Music Section */}
          <section id="musicas" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Músicas
              </h2>
              
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="mb-6">
                  <iframe
                    src="https://open.spotify.com/embed/album/1qyY4y4lPjTZzHDdalOD2W?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowTransparency="true"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Se Revela - Diguera | Spotify"
                    className="rounded-lg"
                  ></iframe>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-3 bg-gray-800 bg-opacity-50 rounded">
                    <div>
                      <span className="text-gray-400 text-sm mr-4">1</span>
                      <span className="font-semibold">Mega Se Revela</span>
                      <div className="text-sm text-gray-400">Diguera</div>
                    </div>
                    <span className="text-gray-400 text-sm">02:55</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-800 bg-opacity-50 rounded">
                    <div>
                      <span className="text-gray-400 text-sm mr-4">2</span>
                      <span className="font-semibold">Mega Tudo Pirainha</span>
                      <div className="text-sm text-gray-400">Diguera</div>
                    </div>
                    <span className="text-gray-400 text-sm">02:55</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-800 bg-opacity-50 rounded">
                    <div>
                      <span className="text-gray-400 text-sm mr-4">3</span>
                      <span className="font-semibold">Mega Joga a Xrc</span>
                      <div className="text-sm text-gray-400">Diguera</div>
                    </div>
                    <span className="text-gray-400 text-sm">02:38</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-800 bg-opacity-50 rounded">
                    <div>
                      <span className="text-gray-400 text-sm mr-4">4</span>
                      <span className="font-semibold">Mega Vou te Botar</span>
                      <div className="text-sm text-gray-400">Diguera</div>
                    </div>
                    <span className="text-gray-400 text-sm">03:16</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-gray-800 bg-opacity-50 rounded">
                    <div>
                      <span className="text-gray-400 text-sm mr-4">5</span>
                      <span className="font-semibold">Mega Furdunço</span>
                      <div className="text-sm text-gray-400">Diguera</div>
                    </div>
                    <span className="text-gray-400 text-sm">02:55</span>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  >
                    Ver no Spotify
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section id="videos" className="py-20 px-4 bg-gray-900 bg-opacity-30">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Vídeos
              </h2>
              
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">MEGA DIA DE PLANTÃO (DIGUERA)</h3>
                  <p className="text-gray-400 text-sm mb-4">Diguera • 2.47K subscribers</p>
                  
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/J4SezJtNvq8"
                      title="MEGA DIA DE PLANTÃO (DIGUERA)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  >
                    Visitar Canal
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="sobre" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Sobre Diguera
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/src/assets/djdigoidg.webp"
                    alt="Foto de Diguera, DJ e produtor de Mega Funk de Joinville"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <p className="text-lg leading-relaxed mb-8 text-gray-300">
                    Rodrigo, conhecido como Diguera, iniciou sua carreira no Megafunk em 2019. Com um estilo próprio e a essência do Megafunk, conquistou espaço e destaque entre 2020 e 2021.
                  </p>
                  <p className="text-lg leading-relaxed mb-8 text-gray-300">
                    Artista versátil, entrega sempre o melhor em cada show e segue em evolução constante na cena.
                  </p>
                  
                  <button
                    onClick={handleContactClick}
                    className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
                  >
                    Contrate
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating Contact Button */}
        <button
          onClick={handleContactClick}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-50"
          style={{ fontFamily: 'Roboto Mono, monospace' }}
        >
          CONTRATE
        </button>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Roboto Mono', monospace;
          background-color: #000;
          color: #e5e7eb;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Orbitron', sans-serif;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #111;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4ade80;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #22c55e;
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
};

export default DJDiguera;