
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToContact = () => {
    window.location.href = '/#contact-form';
  };

  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="/lovable-uploads/b82dfbed-9b46-4941-a723-31bff58602a2.png" 
                alt="One Shot Logo" 
                className="h-16 md:h-20" 
              />
            </div>
            
            {/* Quick CTA in Footer */}
            <div className="mt-4 flex flex-col items-center md:items-start">
              <Button
                onClick={scrollToContact}
                className="bg-oneshot-red text-white hover:bg-red-800 mb-2"
                size="sm"
              >
                <span>צרו קשר עכשיו</span>
                <ArrowRight className="size-3" />
              </Button>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-oneshot-gold text-oneshot-gold hover:bg-oneshot-gold/10"
                  size="sm"
                >
                  לצפייה במסלולים
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
            <div>
              <h3 className="text-oneshot-gold font-bold text-xl mb-4">צרו קשר</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-end">
                  <span className="ml-2">054-1234567</span>
                  <Phone className="h-5 w-5 text-oneshot-gold" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">info@one-shot.co.il</span>
                  <Mail className="h-5 w-5 text-oneshot-gold" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">רחוב הביטחון 1, תל אביב</span>
                  <MapPin className="h-5 w-5 text-oneshot-gold" />
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-oneshot-gold font-bold text-xl mb-4">שעות פעילות</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-end">
                  <span className="ml-2">א'-ה': 9:00-18:00</span>
                  <Clock className="h-5 w-5 text-oneshot-gold" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">ו': 9:00-13:00</span>
                  <Clock className="h-5 w-5 text-oneshot-gold" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">מענה טלפוני 24/7</span>
                  <Phone className="h-5 w-5 text-oneshot-gold" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://facebook.com/oneshot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-oneshot-gold/20 hover:bg-oneshot-gold/40 p-3 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 text-oneshot-gold" />
          </a>
          <a 
            href="https://instagram.com/oneshot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-oneshot-gold/20 hover:bg-oneshot-gold/40 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-oneshot-gold" />
          </a>
        </div>
        
        {/* Products Quick Links */}
        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <Link to="/products" className="bg-oneshot-gray/40 hover:bg-oneshot-gray/60 px-4 py-2 rounded-md text-oneshot-gold font-semibold transition-colors">
            מסלול רגיל - ₪999
          </Link>
          <Link to="/products" className="bg-oneshot-gray/40 hover:bg-oneshot-gray/60 px-4 py-2 rounded-md text-oneshot-gold font-semibold transition-colors">
            חבילת פרימיום - ₪1,999
          </Link>
          <Link to="/products" className="bg-oneshot-gray/40 hover:bg-oneshot-gray/60 px-4 py-2 rounded-md text-oneshot-gold font-semibold transition-colors">
            מסלול לחיילים משוחררים
          </Link>
        </div>
        
        <div className="border-t border-oneshot-gold/20 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} One Shot - הדרך המהירה לרישיון נשק. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
