import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, ExternalLink, Instagram, Music, Video } from 'lucide-react';
import CustomCursor from '../components/CustomCursor';
import LazyImage from '../components/LazyImage';
import LazySpotifyEmbed from '../components/LazySpotifyEmbed';
import LazyYouTubeEmbed from '../components/LazyYouTubeEmbed';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import DJPageCSS from '../components/DJPageCSS';
import FixedFloatingButton from '../components/FixedFloatingButton';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { openWhatsApp } from '../utils/whatsapp';

const DJDigueraPro = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const djData = {
    name: "DJ Diguera",
    artistName: "Diguera",
    realName: "Rodrigo",
    description: "Electronic Music Producer especializado em Mega Funk",
    bio: "Rodrigo, conhecido como Diguera, iniciou sua carreira no Megafunk em 2019. Com um estilo próprio e a essência do Megafunk, conquistou espaço e destaque entre 2020 e 2021. Artista versátil, entrega sempre o melhor em cada show e segue em evolução constante na cena.",
    image: "/src/assets/djdigoidg.webp",
    color: "#00ff88",
    stats: {
      youtubeSubscribers: "2.47K",
      youtubeViews: "50K+",
      spotifyMonthly: "15K+",
      youtubeVideos: "25+"
    },
    socialLinks: {
      spotify: "https://open.spotify.com/intl-pt/artist/1CKoqzkaphGMIcHZ55JvvM",
      youtube: "https://www.youtube.com/channel/UC-CEC6IFh1ogjyJlL3QOslQ",
      instagram: "https://www.instagram.com/diguerabr/",
      whatsapp: "5547997644727"
    },
    featuredAlbum: {
      name: "Se Revela",
      spotifyId: "1qyY4y4lPjTZzHDdalOD2W",
      tracks: [
        { name: "Mega Se Revela", duration: "02:55" },
        { name: "Mega Tudo Pirainha", duration: "02:55" },
        { name: "Mega Joga a Xrc", duration: "02:38" },
        { name: "Mega Vou te Botar", duration: "03:16" },
        { name: "Mega Furdunço", duration: "02:55" }
      ]
    },
    featuredVideo: {
      title: "MEGA DIA DE PLANTÃO (DIGUERA)",
      youtubeId: "J4SezJtNvq8"
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <PerformanceOptimizer>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <CustomCursor />
        
        <SEOHead
          title="DJ Diguera - Electronic Music Producer | Mega Funk | Gruv Label"
          description="Conheça DJ Diguera, electronic music producer especializado em Mega Funk. Rodrigo iniciou em 2019 e conquistou destaque na cena. Contrate já!"
          image="/src/assets/djdigoidg.webp"
          url="https://gruvlabel.com/diguera"
          type="profile"
          artist={{
            name: djData.name,
            description: djData.description,
            genre: "Mega Funk"
          }}
          socialLinks={djData.socialLinks}
        />

        <StructuredData
          type="artist"
          data={{
            name: djData.name,
            alternateName: djData.artistName,
            jobTitle: "Electronic Music Producer",
            genre: "Mega Funk",
            performerIn: "Mega Funk Shows",
            url: "https://gruvlabel.com/diguera",
            sameAs: [
              djData.socialLinks.spotify,
              djData.socialLinks.youtube,
              djData.socialLinks.instagram
            ]
          }}
        />

        <DJPageCSS />
        <FixedFloatingButton />

        {/* Header */}
        <motion.header
          className="fixed top-0 left-0 right-0 z-50 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Voltar</span>
            </Link>
            
            <img
              src="/logo-gruvlabel.png"
              alt="Gruv Label"
              className="h-8 opacity-80"
            />
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center relative px-6"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" />
          </div>

          <motion.div
            className="text-center z-10"
            variants={itemVariants}
          >
            {/* Main Logo */}
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <LazyImage
                src="/src/assets/diguera-logo.png"
                alt="Diguera Logo"
                className="w-auto h-32 mx-auto mb-4"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-2xl font-bold tracking-wider mb-8"
              style={{ color: djData.color }}
              variants={itemVariants}
            >
              DJ / PRODUTOR
            </motion.p>

            {/* Navigation */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => document.getElementById('musicas').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Music size={20} />
                <span>Músicas</span>
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('videos').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Video size={20} />
                <span>Vídeos</span>
              </motion.button>

              <motion.button
                onClick={() => openWhatsApp(djData.socialLinks.whatsapp, `Contratar ${djData.name}`)}
                className="flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: djData.color, color: '#000' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CONTRATE</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
            </div>
          </motion.div>
        </motion.section>

        {/* Music Section */}
        <motion.section
          id="musicas"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Músicas
            </motion.h2>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{djData.featuredAlbum.name}</h3>
                <p className="text-white/70">Álbum • Diguera • 2024</p>
              </div>

              <div className="mb-8">
                <LazySpotifyEmbed
                  src={`https://open.spotify.com/embed/album/${djData.featuredAlbum.spotifyId}?utm_source=generator&theme=0`}
                  title={`${djData.featuredAlbum.name} - ${djData.name}`}
                />
              </div>

              <div className="space-y-4">
                {djData.featuredAlbum.tracks.map((track, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-white/50 font-mono text-sm">{index + 1}</span>
                      <div>
                        <h4 className="font-medium">{track.name}</h4>
                        <p className="text-sm text-white/70">Diguera</p>
                      </div>
                    </div>
                    <span className="text-white/50 text-sm font-mono">{track.duration}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 text-center"
                variants={itemVariants}
              >
                <a
                  href={djData.socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-white rounded-full font-medium hover:bg-[#1ed760] transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Ver no Spotify</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Videos Section */}
        <motion.section
          id="videos"
          className="py-20 px-6 bg-white/5"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Vídeos
            </motion.h2>

            <motion.div
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              variants={itemVariants}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{djData.featuredVideo.title}</h3>
                <p className="text-white/70">Diguera • 2.47K subscribers</p>
              </div>

              <div className="mb-6">
                <LazyYouTubeEmbed
                  videoId={djData.featuredVideo.youtubeId}
                  title={djData.featuredVideo.title}
                />
              </div>

              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <a
                  href={djData.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-white rounded-full font-medium hover:bg-[#cc0000] transition-colors duration-300"
                >
                  <ExternalLink size={20} />
                  <span>Visitar Canal</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="sobre"
          className="py-20 px-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-12"
              variants={itemVariants}
            >
              Sobre Diguera
            </motion.h2>

            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
              variants={itemVariants}
            >
              <div>
                <LazyImage
                  src="/src/assets/djdigoidg.webp"
                  alt="Foto de Diguera, DJ e produtor de Mega Funk"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>

              <div>
                <motion.p
                  className="text-lg leading-relaxed text-white/90 mb-8"
                  variants={itemVariants}
                >
                  {djData.bio}
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 gap-4 mb-8"
                  variants={itemVariants}
                >
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold" style={{ color: djData.color }}>
                      {djData.stats.youtubeSubscribers}
                    </div>
                    <div className="text-sm text-white/70">Inscritos</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold" style={{ color: djData.color }}>
                      {djData.stats.spotifyMonthly}
                    </div>
                    <div className="text-sm text-white/70">Ouvintes/mês</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-4"
                  variants={itemVariants}
                >
                  <a
                    href={djData.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                  
                  <motion.button
                    onClick={() => openWhatsApp(djData.socialLinks.whatsapp, `Contratar ${djData.name}`)}
                    className="px-6 py-2 rounded-full font-medium transition-all duration-300"
                    style={{ backgroundColor: djData.color, color: '#000' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contrate
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          @media (prefers-reduced-motion: reduce) {
            .animate-float {
              animation: none;
            }
          }
        `}</style>
      </div>
    </PerformanceOptimizer>
  );
};

export default DJDigueraPro;