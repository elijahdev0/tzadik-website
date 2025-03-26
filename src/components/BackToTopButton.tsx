import React, { useState, useEffect } from 'react';
import { ArrowUpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show button when user scrolls down enough
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 bg-oneshot-gold text-oneshot-dark p-4 rounded-full shadow-xl hover:bg-oneshot-gold/90 transition-colors duration-300 group border-2 border-oneshot-dark/20"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUpCircle className="h-8 w-8 group-hover:animate-bounce" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton; 