import React from 'react';
import { Phone, Mail, Instagram, Facebook, MapPin, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-oneshot-dark to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-oneshot-gold/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-oneshot-green/10 rounded-full filter blur-3xl"></div>
      
      {/* Pre-footer CTA section */}
      <div className="relative border-b border-oneshot-gold/10 bg-oneshot-dark/50">
        <div className="container mx-auto py-12 px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-oneshot-dark/90 to-oneshot-green/40 p-8 rounded-2xl shadow-xl border border-oneshot-gold/20 backdrop-blur-sm">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                מוכנים <span className="text-oneshot-gold">להתחיל?</span>
              </h3>
              <p className="text-gray-300">אנחנו כאן כדי לעזור לכם לקבל את רישיון הנשק בדרך המהירה והפשוטה ביותר</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => scrollToSection('contact-form')}
                className="bg-oneshot-gold hover:bg-oneshot-gold/90 text-oneshot-dark font-semibold px-6 py-6 h-auto w-full sm:w-auto relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>השאירו פרטים עכשיו</span>
                </span>
                <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('product-showcase')}
                variant="outline"
                className="border-oneshot-gold text-oneshot-gold hover:bg-oneshot-gold/10 px-6 py-6 h-auto w-full sm:w-auto"
              >
                צפו במסלולים שלנו
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto py-16 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company info */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <img 
                src="/images/logo.jpeg" 
                alt="One Shot Logo" 
                className="w-14 h-14 rounded-full border border-oneshot-gold/50 mr-3" 
              />
              <h3 className="text-2xl font-bold text-white">
                <span className="text-oneshot-gold">ONE</span>SHOT
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              המובילים במתן שירותי ייעוץ והוצאת רישיונות נשק בישראל.
              אנו מתחייבים לשירות מהיר, אדיב ומקצועי.
            </p>
            <div className="flex space-x-3 justify-center md:justify-end">
              <a 
                href="https://facebook.com/oneshot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-oneshot-dark hover:bg-oneshot-gold/20 p-2 rounded-full transition-colors border border-oneshot-gold/30"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-oneshot-gold" />
              </a>
              <a 
                href="https://instagram.com/oneshot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-oneshot-dark hover:bg-oneshot-gold/20 p-2 rounded-full transition-colors border border-oneshot-gold/30"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-oneshot-gold" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-oneshot-gold mb-6">ניווט מהיר</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-oneshot-gold transition-colors"
                >
                  דף הבית
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-300 hover:text-oneshot-gold transition-colors"
                >
                  היתרונות שלנו
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('product-showcase')}
                  className="text-gray-300 hover:text-oneshot-gold transition-colors"
                >
                  המסלולים
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-oneshot-gold transition-colors"
                >
                  שאלות נפוצות
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact-form')}
                  className="text-gray-300 hover:text-oneshot-gold transition-colors"
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold text-oneshot-gold mb-6">צרו קשר</h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-300 hover:text-oneshot-gold transition-colors">
                  <a href="tel:0537124171">0537124171</a>
                </span>
                <Phone className="h-5 w-5 text-oneshot-gold mr-2" />
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-300 hover:text-oneshot-gold transition-colors">
                  <a href="mailto:Orel7139@gmail.com">Orel7139@gmail.com</a>
                </span>
                <Mail className="h-5 w-5 text-oneshot-gold mr-2" />
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-300">ישראל</span>
                <MapPin className="h-5 w-5 text-oneshot-gold mr-2" />
              </li>
            </ul>
            
            <div className="mt-6 pt-6 border-t border-oneshot-gold/10">
              <h4 className="text-lg font-semibold text-white mb-3">המסלולים שלנו:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                <span className="inline-block bg-oneshot-gold/10 text-oneshot-gold px-3 py-1 rounded-full text-sm">
                  משיכת פיקדון: ₪1,000
                </span>
                <span className="inline-block bg-oneshot-gold/10 text-oneshot-gold px-3 py-1 rounded-full text-sm">
                  רישיון נשק: ₪1,599
                </span>
                <span className="inline-block bg-oneshot-gold/10 text-oneshot-gold px-3 py-1 rounded-full text-sm">
                  חבילה משולבת: ₪2,299
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-oneshot-gold/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} One Shot - הדרך המהירה לרישיון נשק. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
