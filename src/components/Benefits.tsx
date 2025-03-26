import React from 'react';
import { Clock, Shield, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="w-14 h-14 text-oneshot-gold group-hover:text-white transition-colors duration-300" />,
      title: "תהליך מהיר",
      description: "עד 14 ימי עסקים בלבד - המהיר ביותר בישראל"
    },
    {
      icon: <Shield className="w-14 h-14 text-oneshot-gold group-hover:text-white transition-colors duration-300" />,
      title: "מקסימום ביטחון",
      description: "הגנו על עצמכם ועל משפחתכם עם רישיון נשק חוקי"
    },
    {
      icon: <Users className="w-14 h-14 text-oneshot-gold group-hover:text-white transition-colors duration-300" />,
      title: "ליווי אישי מלא",
      description: "צוות מקצועי מלווה אתכם מהרישום ועד לאישור הסופי"
    },
    {
      icon: <DollarSign className="w-14 h-14 text-oneshot-gold group-hover:text-white transition-colors duration-300" />,
      title: "מחיר משתלם",
      description: "רק 999 ₪ - השקעה קטנה לביטחון ארוך טווח"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="benefits">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-oneshot-dark bg-opacity-95"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-repeat opacity-5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-oneshot-gold/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-oneshot-green/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-white">
            למה לבחור <span className="gradient-text">ב-One Shot?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-oneshot-gold to-oneshot-red mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group glass p-8 rounded-2xl text-center hover:bg-gradient-to-br hover:from-oneshot-gold/20 hover:to-oneshot-gold/5 transition-all duration-500 hover:shadow-xl hover:shadow-oneshot-gold/10 transform hover:scale-105"
            >
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-oneshot-dark/50 rounded-full border border-oneshot-gold/30 group-hover:bg-oneshot-gold/20 group-hover:border-white/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-oneshot-gold group-hover:text-white transition-colors">{benefit.title}</h3>
              <p className="text-lg text-gray-300 group-hover:text-white/90 transition-colors">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white max-w-3xl mx-auto mb-2">
            אנחנו בOne Shot מחויבים להפוך את תהליך קבלת רישיון הנשק לפשוט, נגיש, ומהיר עבורכם.
          </p>
          <p className="text-lg text-oneshot-gold">בחרו במובילים בתחום - בחרו באנשי המקצוע של One Shot!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
