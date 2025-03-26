import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, CheckCircle, Shield, ArrowUp, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact-form') {
      // Redirect to WhatsApp
      window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">
      {/* Pre-footer CTA section with angled design */}
      <div className="relative bg-gradient-to-r from-oneshot-dark via-black to-oneshot-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        
        {/* Diagonal separator */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-oneshot-dark transform -skew-y-2"></div>
        
        <div className="container mx-auto py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-black/80 to-oneshot-dark/90 p-10 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.3)] border border-oneshot-gold/30 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-oneshot-gold/5 rounded-full filter blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/5 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-right md:max-w-md">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <Shield className="h-8 w-8 text-oneshot-gold" />
                      <h3 className="text-3xl font-bold text-white">
                        מוכנים <span className="text-oneshot-gold">להתחיל?</span>
                      </h3>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      לחצו על הכפתור כדי לקבל ייעוץ מיידי בוואטסאפ ולהתחיל את התהליך כבר היום.
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                    <Button
                      onClick={() => scrollToSection('contact-form')}
                      className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-8 rounded-xl shadow-lg relative overflow-hidden group w-full md:w-auto"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                      <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        <span className="text-lg">פתיחת WhatsApp עכשיו</span>
                      </span>
                    </Button>
                    
                    <Button
                      onClick={() => scrollToSection('product-showcase')}
                      variant="outline"
                      className="border-2 border-oneshot-gold bg-transparent text-oneshot-gold hover:bg-oneshot-gold/10 py-3 px-6 rounded-xl w-full md:w-auto font-medium transition-all duration-300"
                    >
                      צפו במסלולים שלנו
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="bg-black bg-opacity-95 relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        
        <div className="container mx-auto pt-16 pb-8 px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 border-b border-oneshot-gold/10 pb-10">
            {/* Logo and description */}
            <div className="md:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-oneshot-gold to-amber-600 p-0.5 rounded-xl shadow-lg">
                  <div className="bg-black p-2 rounded-[10px]">
                    <img 
                      src="/images/logo.jpeg" 
                      alt="One Shot Logo" 
                      className="w-10 h-10 rounded-md" 
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    <span className="text-oneshot-gold">ONE</span>SHOT
                  </h3>
                  <p className="text-xs text-gray-400">הדרך המהירה לרישיון נשק</p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                המובילים במתן שירותי ייעוץ והוצאת רישיונות נשק בישראל.
                אנו מתחייבים לשירות מהיר, אדיב ומקצועי, עם אחוזי הצלחה גבוהים במיוחד.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://facebook.com/oneshot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-oneshot-dark hover:bg-oneshot-gold/20 p-2 rounded-lg transition-colors border border-oneshot-gold/30 group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-oneshot-gold group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://instagram.com/oneshot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-oneshot-dark hover:bg-oneshot-gold/20 p-2 rounded-lg transition-colors border border-oneshot-gold/30 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-oneshot-gold group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://wa.me/972537124171" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-800 hover:bg-green-700 p-2 rounded-lg transition-colors border border-green-600/50 group"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5 text-white group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div className="md:col-span-3 md:text-right">
              <h4 className="text-xl font-bold text-white mb-5 flex items-center md:justify-end gap-2">
                <span>ניווט מהיר</span>
                <div className="h-1 w-6 bg-oneshot-gold rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-400 hover:text-oneshot-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-oneshot-gold group-hover:w-4 transition-all duration-300"></span>
                    <span>דף הבית</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="text-gray-400 hover:text-oneshot-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-oneshot-gold group-hover:w-4 transition-all duration-300"></span>
                    <span>היתרונות שלנו</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('product-showcase')}
                    className="text-gray-400 hover:text-oneshot-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-oneshot-gold group-hover:w-4 transition-all duration-300"></span>
                    <span>המסלולים</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="text-gray-400 hover:text-oneshot-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-oneshot-gold group-hover:w-4 transition-all duration-300"></span>
                    <span>שאלות נפוצות</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact-form')}
                    className="text-green-400 hover:text-green-300 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300"></span>
                    <span>צור קשר בוואטסאפ</span>
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Contact info */}
            <div className="md:col-span-3 md:text-right">
              <h4 className="text-xl font-bold text-white mb-5 flex items-center md:justify-end gap-2">
                <span>צור קשר</span>
                <div className="h-1 w-6 bg-oneshot-gold rounded-full"></div>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-start md:justify-end gap-3 group">
                  <span className="text-gray-300 hover:text-oneshot-gold transition-colors">
                    <a href="tel:0537124171" className="flex items-center gap-2">
                      <span>0537124171</span>
                      <Phone className="h-4 w-4 text-oneshot-gold group-hover:text-oneshot-gold transition-colors" />
                    </a>
                  </span>
                </li>
                <li className="flex items-center justify-start md:justify-end gap-3 group">
                  <span className="text-gray-300 hover:text-oneshot-gold transition-colors">
                    <a href="mailto:Orel7139@gmail.com" className="flex items-center gap-2">
                      <span>Orel7139@gmail.com</span>
                      <Mail className="h-4 w-4 text-oneshot-gold group-hover:text-oneshot-gold transition-colors" />
                    </a>
                  </span>
                </li>
                <li className="flex items-center justify-start md:justify-end gap-3">
                  <span className="text-gray-300">ישראל</span>
                  <MapPin className="h-4 w-4 text-oneshot-gold" />
                </li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="md:col-span-2 md:text-right">
              <h4 className="text-xl font-bold text-white mb-5 flex items-center md:justify-end gap-2">
                <span>המסלולים שלנו</span>
                <div className="h-1 w-6 bg-oneshot-gold rounded-full"></div>
              </h4>
              <div className="flex flex-col gap-3">
                <div className="bg-oneshot-dark/50 border border-oneshot-gold/20 rounded-lg p-3 hover:border-oneshot-gold/50 transition-all cursor-pointer" onClick={() => scrollToSection('product-showcase')}>
                  <div className="text-oneshot-gold font-bold text-lg">₪1,000</div>
                  <div className="text-gray-400 text-sm">משיכת פיקדון צבאי</div>
                </div>
                <div className="bg-oneshot-dark/50 border border-oneshot-gold/20 rounded-lg p-3 hover:border-oneshot-gold/50 transition-all cursor-pointer relative" onClick={() => scrollToSection('product-showcase')}>
                  <div className="absolute -top-2 -right-2 bg-oneshot-red text-white text-[10px] px-2 py-0.5 rounded-full">מומלץ!</div>
                  <div className="text-oneshot-gold font-bold text-lg">₪1,599</div>
                  <div className="text-gray-400 text-sm">רישיון נשק</div>
                </div>
                <div className="bg-oneshot-dark/50 border border-oneshot-gold/20 rounded-lg p-3 hover:border-oneshot-gold/50 transition-all cursor-pointer" onClick={() => scrollToSection('product-showcase')}>
                  <div className="text-oneshot-gold font-bold text-lg">₪2,299</div>
                  <div className="text-gray-400 text-sm">חבילה משולבת</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Copyright & back to top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} One Shot - הדרך המהירה לרישיון נשק. כל הזכויות שמורות.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-oneshot-gold transition-colors group"
            >
              <span>חזרה למעלה</span>
              <div className="bg-oneshot-dark/80 border border-oneshot-gold/30 p-1 rounded-md group-hover:bg-oneshot-gold/20 transition-all">
                <ArrowUp className="h-4 w-4 text-oneshot-gold" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
