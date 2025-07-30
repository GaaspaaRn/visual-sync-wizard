import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingContractButton = ({ djName, whatsappMessage }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=5547988625307&text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
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
            padding: '1rem 1.5rem',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 30px hsla(var(--primary), 0.4)',
            transition: 'all 0.3s ease',
            fontFamily: "'Dystopian', 'Montserrat', sans-serif",
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 15px 40px hsla(var(--primary), 0.6)',
            background: 'linear-gradient(135deg, hsl(180 100% 40%), hsl(var(--primary)))'
          }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle style={{ width: '1.2rem', height: '1.2rem' }} />
          CONTRATAR {djName}
        </motion.button>
      </a>
    </motion.div>
  );
};

export default FloatingContractButton;