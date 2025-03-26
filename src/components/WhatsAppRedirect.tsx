import React from 'react';
import { MessageSquare, Send, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppRedirect = () => {
  // Replace with your actual WhatsApp number - no plus sign or dashes
  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
  };

  return (
    <section id="contact-form" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-oneshot-dark to-green-900/50 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-oneshot-gold/10 rounded-full blur-3xl"></div>
      
      {/* WhatsApp Sparkling Animation */}
      <AnimatePresence>
        <motion.div 
          className="absolute inset-0 pointer-events-none z-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400"
              initial={{ 
                x: Math.random() * 100 - 50 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Phone className="h-8 w-8" />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto">
          <div className="bg-oneshot-dark/70 p-8 rounded-xl backdrop-blur-sm border border-green-500/20 shadow-[0_0_15px_rgba(0,200,0,0.3)]">
            <motion.h2
              className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-green-400 drop-shadow-[0_0_15px_rgba(0,200,0,0.5)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              צרו קשר עכשיו ב-WhatsApp!
            </motion.h2>

            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-xl mb-4 text-white">
                המומחים שלנו מחכים לענות לכל שאלה!
              </p>
              <p className="text-lg text-gray-300">
                לחצו על הכפתור למטה כדי לפתוח שיחה מיידית עם נציג
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button 
                onClick={redirectToWhatsApp} 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-10 rounded-full text-xl shadow-lg group relative overflow-hidden"
              >
                <span className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                <MessageSquare className="mr-2 h-6 w-6" />
                <span>WhatsApp לשיחה מיידית</span> 
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppRedirect; 