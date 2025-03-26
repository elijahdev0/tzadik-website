import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 relative overflow-hidden bg-gradient-to-b from-oneshot-dark to-oneshot-green/40">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-oneshot-dark bg-opacity-70 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-oneshot-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-oneshot-red/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-oneshot-gold drop-shadow-lg">
            המסלולים שלנו
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-oneshot-gold to-oneshot-red mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
        >
          {/* First Product - Pikadon Package */}
          <motion.div 
            variants={item}
            className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 hover:border-oneshot-gold/40 transition-all duration-500 hover:shadow-oneshot-gold/20 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-oneshot-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-oneshot-red px-4 py-2 absolute top-0 right-0 m-4 rounded-lg font-bold z-10 shadow-lg">
              משיכת פיקדון צבאי
            </div>
            
            <div className="p-8 mt-12 relative z-10">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-4">משיכת פיקדון צבאי</h3>
              <p className="mb-6 text-oneshot-light font-light">
                משוך את הפיקדון הצבאי שלך במהירות ובקלות
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">ליווי אישי לאורך כל התהליך</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">מילוי וטיפול בכל המסמכים הנדרשים</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">תהליך מהיר ויעיל</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">ייעוץ מקצועי</span>
                </li>
              </ul>
              
              <div className="text-center mb-6 bg-oneshot-dark/30 py-4 rounded-xl">
                <p className="text-4xl font-bold text-oneshot-gold">₪1,000</p>
                <p className="text-sm text-oneshot-light mt-1">תשלום חד פעמי</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="relative overflow-hidden bg-oneshot-red hover:bg-red-800 text-white text-lg py-4 px-6 rounded-xl w-full shadow-lg group-hover:shadow-red-600/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  להתחיל את התהליך
                  <ArrowRight className="mr-2 group-hover:translate-x-[-5px] transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-oneshot-red to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </motion.div>
          
          {/* Second Product - Gun License Package */}
          <motion.div 
            variants={item}
            className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/40 hover:border-oneshot-gold/70 transition-all duration-500 hover:shadow-oneshot-gold/30 hover:-translate-y-2 scale-105 z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-oneshot-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-oneshot-gold to-yellow-400"></div>
            
            <div className="bg-oneshot-gold px-4 py-2 absolute top-0 right-0 m-4 rounded-lg font-bold text-oneshot-dark z-10 shadow-lg">
              רישיון נשק
            </div>
            
            <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>מומלץ!</span>
            </div>
            
            <div className="p-8 mt-12 relative z-10">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-4">רישיון נשק בישראל</h3>
              <p className="mb-6 text-oneshot-light font-light">
                הדרך המהירה והבטוחה לקבלת רישיון נשק
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 group/item">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">רישיון לנשק עד 14 ימי עסקים בלבד!</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">תשלום רק לאחר קבלת הרישיון!</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">ליווי אישי של אחד ממשרדי עורכי הדין הגדולים בארץ</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <Star className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">מתאים למי ששירת בצבא</span>
                </li>
              </ul>
              
              <div className="text-center mb-6 bg-oneshot-dark/30 py-4 rounded-xl">
                <div className="relative">
                  <p className="text-4xl font-bold text-oneshot-gold">₪1,599</p>
                  <div className="absolute -top-3 -right-3 bg-oneshot-red text-white text-xs px-2 py-1 rounded-full">חסכון של ₪400</div>
                </div>
                <p className="text-sm text-oneshot-light mt-1">תשלום רק לאחר קבלת הרישיון!</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="relative overflow-hidden bg-oneshot-gold hover:bg-amber-600 text-oneshot-dark text-lg py-4 px-6 rounded-xl w-full font-bold shadow-lg group-hover:shadow-oneshot-gold/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  השאירו פרטים עכשיו
                  <ArrowRight className="mr-2 group-hover:translate-x-[-5px] transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-oneshot-gold to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </motion.div>

          {/* Third Product - Combined Package */}
          <motion.div 
            variants={item}
            className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-oneshot-gold/20 hover:border-oneshot-gold/40 transition-all duration-500 hover:shadow-oneshot-gold/20 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-oneshot-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="bg-oneshot-green px-4 py-2 absolute top-0 right-0 m-4 rounded-lg font-bold z-10 shadow-lg">
              חבילה משולבת
            </div>
            
            <div className="p-8 mt-12 relative z-10">
              <h3 className="text-2xl font-bold text-oneshot-gold mb-4">משיכת פיקדון + רישיון נשק</h3>
              <p className="mb-6 text-oneshot-light font-light">
                הדרך המשתלמת ביותר - משיכת פיקדון + רישיון נשק במחיר מיוחד!
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">משיכת פיקדון צבאי מלאה</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">רישיון נשק עד 14 ימי עסקים</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">ליווי אישי לאורך כל התהליך</span>
                </li>
                <li className="flex items-center gap-3 group/item">
                  <CheckCircle className="text-oneshot-gold shrink-0 w-5 h-5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-white group-hover/item:text-oneshot-gold transition-colors">הנחה משמעותית במחיר הכולל</span>
                </li>
              </ul>
              
              <div className="text-center mb-6 bg-oneshot-dark/30 py-4 rounded-xl">
                <div className="relative">
                  <p className="text-4xl font-bold text-oneshot-gold">₪2,299</p>
                  <div className="absolute -top-3 -right-3 bg-oneshot-red text-white text-xs px-2 py-1 rounded-full">חסכון של ₪300</div>
                </div>
                <p className="text-sm text-oneshot-light mt-1">תשלום רק לאחר קבלת הרישיון!</p>
              </div>
              
              <Button 
                onClick={scrollToContact}
                className="relative overflow-hidden bg-oneshot-green hover:bg-green-800 text-white text-lg py-4 px-6 rounded-xl w-full shadow-lg group-hover:shadow-green-600/30 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  קבל הצעה אישית
                  <ArrowRight className="mr-2 group-hover:translate-x-[-5px] transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-oneshot-green to-green-800 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl max-w-3xl mx-auto border border-oneshot-gold/20 shadow-xl">
            <p className="text-2xl text-white mb-6">
              💡 גר בסביבה לא בטוחה? רוצה להגן על המשפחה?<br/>
              אנחנו מקצרים לך את הדרך לרישיון נשק – בלי כאבי ראש ובלי סיבוכים!
            </p>
            <Button 
              onClick={scrollToContact}
              className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white text-xl py-6 px-10 font-bold rounded-xl shadow-lg hover:shadow-red-500/30 transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">השאירו פרטים עכשיו!</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase; 