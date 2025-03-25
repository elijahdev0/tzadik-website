import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

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
    <div className="bg-oneshot-dark min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <img 
            src="/images/logo.jpeg" 
            alt="One Shot Logo" 
            className="w-48 h-48 mx-auto mb-2"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          <span className="text-oneshot-gold">הדרך המהירה</span> לרישיון נשק
        </h1>
        <h2 className="text-2xl md:text-3xl mb-4 text-oneshot-light">
          מהיר, מקצועי, ללא סיבוכים - תוך <span className="text-oneshot-red font-bold">14 ימי עסקים בלבד!</span>
        </h2>
        <p className="text-xl mb-8 text-oneshot-light">
          ליווי אישי מקצה לקצה, חיסכון בזמן יקר וביורוקרטיה מיותרת
        </p>
        
        <div className="bg-oneshot-green/90 p-6 rounded-lg mb-10 max-w-2xl mx-auto border border-oneshot-gold/20">
          <ul className="text-lg mb-8 space-y-4 text-right">
            <li className="flex items-center justify-end gap-2">
              <span className="text-oneshot-light">משיכת פיקדון צבאי במחיר מיוחד - ₪1,000</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span className="text-oneshot-light">רישיון נשק עד 14 ימי עסקים - ₪1,599</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span className="text-oneshot-light">חבילה משולבת - משיכת פיקדון + רישיון נשק - ₪2,299</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <span className="text-oneshot-light">תשלום רק לאחר קבלת הרישיון!</span>
              <span className="text-oneshot-gold text-2xl">✓</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={scrollToContact}
            className="cta-button bg-oneshot-red hover:bg-red-700 text-white text-xl py-6 px-10 font-bold animate-pulse-gold"
          >
            השאירו פרטים עכשיו!
          </Button>
          <Button
            onClick={scrollToProducts}
            className="bg-oneshot-gold hover:bg-oneshot-gold/90 text-oneshot-dark text-xl py-6 px-10 font-bold"
          >
            לצפייה במסלולים שלנו
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-6 animate-bounce cursor-pointer" onClick={scrollToProducts}>
          <div className="text-oneshot-gold text-sm mb-2">לחץ לצפייה במסלולים</div>
          <ChevronDown className="w-8 h-8 text-oneshot-gold mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
