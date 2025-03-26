import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProducts = () => {
    // Scroll to the products section
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden" 
         style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/hero-background.jpg')" }}>
      
      {/* Background Overlay with Texture */}
      <div className="absolute inset-0 bg-oneshot-dark opacity-70 z-0"></div>
      
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 max-w-6xl mx-auto"
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 inline-block bg-oneshot-gold/10 p-3 rounded-full backdrop-blur-sm"
        >
          <img 
            src="/images/logo.jpeg" 
            alt="One Shot Logo" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full shadow-2xl border-2 border-oneshot-gold/50"
          />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight"
        >
          <span className="text-oneshot-gold drop-shadow-lg">הדרך המהירה</span> <br className="md:hidden" />
          לרישיון נשק
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-2xl md:text-3xl mb-6 text-oneshot-light font-light"
        >
          מהיר, מקצועי, ללא סיבוכים - תוך <span className="text-oneshot-gold font-bold inline-block transform hover:scale-105 transition-transform">14 ימי עסקים בלבד!</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="backdrop-blur-md bg-oneshot-green/30 p-8 rounded-2xl mb-10 max-w-2xl mx-auto border border-oneshot-gold/30 shadow-xl"
        >
          <ul className="text-lg mb-8 space-y-6 text-right">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">משיכת פיקדון צבאי במחיר מיוחד - ₪1,000</span>
              <span className="text-oneshot-gold text-3xl">✓</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">רישיון נשק עד 14 ימי עסקים - ₪1,599</span>
              <span className="text-oneshot-gold text-3xl">✓</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">חבילה משולבת - משיכת פיקדון + רישיון נשק - ₪2,299</span>
              <span className="text-oneshot-gold text-3xl">✓</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">תשלום רק לאחר קבלת הרישיון!</span>
              <span className="text-oneshot-gold text-3xl">✓</span>
            </motion.li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col md:flex-row gap-5 justify-center mb-10"
        >
          <Button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-xl py-7 px-12 font-bold rounded-xl shadow-lg hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300"
          >
            השאירו פרטים עכשיו!
          </Button>
          <Button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-oneshot-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-oneshot-dark text-xl py-7 px-12 font-bold rounded-xl shadow-lg hover:shadow-oneshot-gold/30 transform hover:scale-105 transition-all duration-300"
          >
            לצפייה במסלולים שלנו
          </Button>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-6 animate-bounce cursor-pointer" 
          onClick={scrollToProducts}
        >
          <div className="text-oneshot-gold text-sm mb-2">לחץ לצפייה במסלולים</div>
          <ChevronDown className="w-8 h-8 text-oneshot-gold mx-auto" />
        </motion.div>
      </motion.div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-oneshot-gold/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-oneshot-green/10 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Hero;
