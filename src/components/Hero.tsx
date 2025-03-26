import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProducts = () => {
    // Scroll to the products section
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
  };

  return (
    <div id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center overflow-hidden pt-20" 
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
        {/* Emblem/Badge instead of redundant logo */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 relative"
        >
          <div className="absolute -inset-16 bg-oneshot-gold/10 rounded-full filter blur-3xl opacity-60 animate-pulse"></div>
          <motion.div 
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 3 
            }}
            className="relative z-10 bg-gradient-to-br from-oneshot-gold via-oneshot-gold/80 to-amber-600 p-1 rounded-full shadow-lg shadow-oneshot-gold/30"
          >
            <div className="bg-oneshot-dark/90 p-6 rounded-full flex items-center justify-center">
              <Shield className="h-16 w-16 md:h-20 md:w-20 text-oneshot-gold" />
            </div>
            <div className="absolute -right-2 -top-2 bg-oneshot-red text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow-lg">
              #1
            </div>
          </motion.div>
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
          className="backdrop-blur-md bg-oneshot-green/30 p-8 rounded-2xl mb-10 max-w-2xl mx-auto border border-oneshot-gold/30 shadow-xl relative"
        >
          {/* Visual indicators for key benefits */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-oneshot-gold/20 p-3 rounded-full mb-2">
                <Clock className="h-6 w-6 text-oneshot-gold" />
              </div>
              <span className="text-sm text-oneshot-light">מהיר ויעיל</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-oneshot-gold/20 p-3 rounded-full mb-2">
                <Award className="h-6 w-6 text-oneshot-gold" />
              </div>
              <span className="text-sm text-oneshot-light">איכות מובטחת</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-oneshot-gold/20 p-3 rounded-full mb-2">
                <Shield className="h-6 w-6 text-oneshot-gold" />
              </div>
              <span className="text-sm text-oneshot-light">מאובטח לחלוטין</span>
            </div>
          </div>
          
          <ul className="text-lg mb-8 space-y-6 text-right">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">משיכת פיקדון צבאי במחיר מיוחד - ₪1,000</span>
              <CheckCircle className="h-5 w-5 text-oneshot-gold flex-shrink-0" />
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">רישיון נשק עד 14 ימי עסקים - ₪1,599</span>
              <CheckCircle className="h-5 w-5 text-oneshot-gold flex-shrink-0" />
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">חבילה משולבת - משיכת פיקדון + רישיון נשק - ₪2,299</span>
              <CheckCircle className="h-5 w-5 text-oneshot-gold flex-shrink-0" />
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
              className="flex items-center justify-end gap-3 hover:translate-x-[-5px] transition-transform"
            >
              <span className="text-white font-medium">תשלום רק לאחר קבלת הרישיון!</span>
              <CheckCircle className="h-5 w-5 text-oneshot-gold flex-shrink-0" />
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
            onClick={redirectToWhatsApp}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-xl py-7 px-12 font-bold rounded-xl shadow-lg hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">פתיחת WhatsApp עכשיו!</span>
            <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </Button>
          <Button
            onClick={scrollToProducts}
            className="bg-gradient-to-r from-oneshot-gold to-amber-600 hover:from-amber-500 hover:to-amber-700 text-oneshot-dark text-xl py-7 px-12 font-bold rounded-xl shadow-lg hover:shadow-oneshot-gold/30 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">לצפייה במסלולים שלנו</span>
            <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
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
