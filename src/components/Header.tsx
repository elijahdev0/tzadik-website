import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section or redirect to WhatsApp
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'contact-form') {
      // Redirect to WhatsApp
      window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
      setMobileMenuOpen(false);
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Navigation items
  const navItems = [
    { name: 'ראשי', section: 'hero' },
    { name: 'יתרונות', section: 'benefits' },
    { name: 'מסלולים', section: 'product-showcase' },
    { name: 'שאלות ותשובות', section: 'faq' },
  ];

  // Track which section is currently active
  const [activeSection, setActiveSection] = useState('hero');

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for header

      // Check which section is currently in view
      const sections = navItems.map(item => item.section);
      for (const section of sections.reverse()) { // Reverse to check from bottom to top
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Update CTA button text
  const ctaButtonText = 'פתיחת WhatsApp';

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-oneshot-dark/90 backdrop-blur-md shadow-lg border-b border-oneshot-gold/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/images/logo.jpeg" 
                alt="One Shot Logo" 
                className="w-12 h-12 rounded-full border border-oneshot-gold/50 mr-3 shadow-lg"
              />
              <div className="text-white font-bold text-lg md:text-xl">
                <span className="text-oneshot-gold">ONE</span>SHOT
              </div>
            </div>
            
            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-1 mr-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className={`header-nav-link ${activeSection === item.section ? 'header-active' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block relative overflow-hidden rounded-full">
              <Button
                onClick={() => scrollToSection('contact-form')}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold relative z-10 px-6 overflow-hidden group"
              >
                {ctaButtonText}
                <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-oneshot-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div 
              className="mobile-menu-backdrop fixed inset-0 bg-black/50 backdrop-blur-sm" 
              onClick={() => setMobileMenuOpen(false)} 
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-oneshot-dark/95 border-l border-oneshot-gold/20 shadow-xl p-6 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-oneshot-gold">תפריט</h3>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-oneshot-gold transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.section}
                    onClick={() => scrollToSection(item.section)}
                    className={`block w-full text-right py-3 px-4 text-white hover:bg-oneshot-gold/20 rounded-md transition-colors ${
                      activeSection === item.section ? 'bg-oneshot-gold/10 text-oneshot-gold font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                
                <div className="pt-4 mt-6 border-t border-oneshot-gold/20">
                  <Button
                    onClick={() => scrollToSection('contact-form')}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold mt-2 relative overflow-hidden group"
                  >
                    <span className="relative z-10">{ctaButtonText}</span>
                    <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                  </Button>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header; 