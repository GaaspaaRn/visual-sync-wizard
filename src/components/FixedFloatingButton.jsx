import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Renomeei o componente para refletir sua função específica
const FloatingDJButton = ({ whatsappMessage }) => {
  // URL para o WhatsApp com a mensagem pré-definida
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5547997644727&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Estilos foram organizados em objetos para melhor legibilidade
  const containerStyle = {
    position: 'fixed',
    bottom: '32px', // 2rem
    right: '32px', // 2rem
    zIndex: 9999, // Higher z-index to ensure it appears above everything
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px', // Espaço entre o ícone e o texto
    background: 'linear-gradient(135deg, hsl(var(--primary)), #10b981)', // Gradiente vibrante
    color: 'hsl(var(--primary-foreground))',
    padding: '14px 24px', // Padding para acomodar o texto
    borderRadius: '9999px', // Cria o formato de "pílula"
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 8px 25px hsla(var(--primary), 0.4)',
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none', // Remove sublinhado do link
  };

  return (
    <div style={containerStyle}>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
        
        // Animação de entrada: surge de baixo e aparece
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        
        // Efeitos de interação
        whileHover={{ scale: 1.05, boxShadow: '0 12px 35px hsla(var(--primary), 0.5)' }}
        whileTap={{ scale: 0.95 }}
      >
        {/* O botão agora é um div, semanticamente melhor dentro de uma tag <a> */}
        <motion.div
          style={buttonStyle}
          // Animação sutil de "pulsação" para chamar atenção
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MessageCircle size={22} />
          <span>Contratar DJ</span>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default FloatingDJButton;
