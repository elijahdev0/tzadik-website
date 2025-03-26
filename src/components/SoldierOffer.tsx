import React from 'react';
import { Button } from "@/components/ui/button";

const SoldierOffer = () => {
  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
  };

  return (
    <section id="soldier-offer" className="py-16 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('/images/camo-pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <div className="bg-oneshot-dark/80 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto border border-oneshot-gold/20">
          <h2 className="section-title text-center">
            <span className="text-white">חייל</span>{" "}
            <span className="text-oneshot-gold">משוחרר?</span>
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-xl mb-6">
              שחררת פיקדון? קבל רישיון לנשק + רישיון לאקדח בקלות ובמהירות!
            </p>
            
            <ul className="text-lg space-y-4 mb-8 inline-block text-right">
              <li className="flex items-center justify-end gap-2">
                <span>ליווי מלא – אנחנו דואגים לכל הבירוקרטיה</span>
                <span className="text-oneshot-gold text-2xl">✓</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>תהליך מהיר – עד 14 ימי עסקים בלבד</span>
                <span className="text-oneshot-gold text-2xl">✓</span>
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>מחיר מיוחד לחיילים משוחררים – רק 1,999 ₪</span>
                <span className="text-oneshot-gold text-2xl">✓</span>
              </li>
            </ul>
            
            <p className="text-lg font-semibold mb-8 text-oneshot-gold">
              ניצול חכם של הפיקדון – ביטחון בידיים שלך!
            </p>
            
            <Button 
              onClick={redirectToWhatsApp}
              className="cta-button bg-oneshot-green hover:bg-green-800 text-xl py-6 px-10 font-bold"
            >
              קבל הצעה מיוחדת לחיילים משוחררים
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoldierOffer;
