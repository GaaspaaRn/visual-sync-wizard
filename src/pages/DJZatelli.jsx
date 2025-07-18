import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Instagram, Youtube, Music } from 'lucide-react';

const DJZatelli = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 py-8"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="relative inline-block mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-green-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center text-6xl font-bold">
                  Z
                </div>
              </div>
            </div>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-green-600 rounded-full blur-lg opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            DJ Zatelli
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Thiago Correira, mais conhecido como DJ Zatelli, Nasceu e cresceu em SC, na cidade de Joinville. Ele é um DJ e produtor de Mega Funk desde os 16 anos de idade, atualmente acumula mais de 1,8 milhões de visualizações. Se destaca na cena do mega funk por estar sempre inovando a cada novo som. Se apresentando em várias cidades do Sul do País, Zatelli vem conquistando cada vez mais reconhecimento e fama.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={itemVariants}
        >
          {[
            { label: "YouTube Inscritos", value: "6.31K", icon: Youtube },
            { label: "Visualizações", value: "1,848,406", icon: Play },
            { label: "Ouvintes/mês", value: "3.9K", icon: Music }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-gray-700/50"
              variants={statsVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300 uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Players Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          variants={itemVariants}
        >
          {/* YouTube Player */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">
              🎵 Música no YouTube
            </h3>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wkBYS1pkY8s"
                title="DJ Zatelli - YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </motion.div>

          {/* Spotify Player */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-green-400">
              🎧 Ouça no Spotify
            </h3>
            <div className="rounded-xl overflow-hidden">
              <iframe 
                data-testid="embed-iframe" 
                style={{borderRadius: '12px'}} 
                src="https://open.spotify.com/embed/track/6BlnhPe8oMmJndqOneit2U?utm_source=generator" 
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

        {/* Social Media */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold mb-8 text-cyan-400">Redes Sociais</h3>
          <div className="flex justify-center space-x-8">
            {[
              { icon: Youtube, label: "YouTube", color: "text-red-500", bg: "bg-red-500/20" },
              { icon: Instagram, label: "Instagram", color: "text-pink-500", bg: "bg-pink-500/20" },
              { icon: Music, label: "Spotify", color: "text-green-500", bg: "bg-green-500/20" }
            ].map((social, index) => (
              <motion.button
                key={index}
                className={`${social.bg} ${social.color} p-6 rounded-2xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300`}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">{social.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-gradient-to-r from-cyan-500 to-green-600 text-white px-12 py-4 rounded-full text-xl font-bold shadow-2xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎤 CONTRATAR ZATELLI
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DJZatelli;