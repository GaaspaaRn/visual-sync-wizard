import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FixedFloatingButton = ({ djName, whatsappMessage }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5547988625307&text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: 0.5
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ textDecoration: 'none' }}
      >
        <motion.button
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(180 100% 40%))',
            color: 'hsl(var(--primary-foreground))',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 25px hsla(var(--primary), 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
          whileHover={{
            boxShadow: '0 12px 35px hsla(var(--primary), 0.6)',
            background: 'linear-gradient(135deg, hsl(180 100% 40%), hsl(var(--primary)))'
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle style={{ width: '24px', height: '24px' }} />
        </motion.button>
      </a>
    </motion.div>
  );
};

export default FixedFloatingButton;