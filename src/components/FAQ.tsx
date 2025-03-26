import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const redirectToWhatsApp = () => {
    window.location.href = "https://wa.me/972537124171"; // Israeli number in international format
  };

  const faqItems = [
    {
      question: "כמה זמן לוקח לקבל רישיון לנשק?",
      answer: "באמצעות השירות שלנו, התהליך אורך עד 14 ימי עסקים בלבד. זהו זמן מהיר משמעותית מהתהליך הרגיל שיכול לקחת שבועות או אף חודשים."
    },
    {
      question: "מה התשלום עבור השירות?",
      answer: "אנו מציעים שני מסלולים: מסלול רגיל בעלות של 999₪ ומסלול פרימיום מורחב בעלות של 1,599₪ שבו התשלום מתבצע רק לאחר קבלת הרישיון. לחיילים משוחררים יש מסלול מיוחד שכולל רישיון לאקדח בנוסף."
    },
    {
      question: "מה ההבדל בין המסלול הרגיל לפרימיום?",
      answer: "במסלול הפרימיום (1,599₪) אתם משלמים רק לאחר קבלת הרישיון וזוכים לליווי אישי של אחד ממשרדי עורכי הדין הגדולים בארץ. כמו כן, אנו מתמודדים גם עם ערעורים וסירובים של בקשות."
    },
    {
      question: "האם אני זכאי לרישיון נשק?",
      answer: "הזכאות לרישיון נשק מוגדרת על פי קריטריונים שונים כגון מקום מגורים, תפקיד, היסטוריה אישית ועוד. השאירו פרטים ונבדוק את זכאותכם באופן אישי."
    },
    {
      question: "מה כלול בשירות שלכם?",
      answer: "השירות שלנו כולל ליווי מלא מתחילת התהליך ועד לקבלת הרישיון, כולל מילוי טפסים, הגשת בקשות, סיוע בהכנת המסמכים הנדרשים, וייצוג מול הרשויות הרלוונטיות."
    },
    {
      question: "איך מתבצע תהליך התשלום?",
      answer: "במסלול הרגיל, התשלום מתבצע מראש. בחבילת הפרימיום, אתם משלמים רק לאחר קבלת הרישיון - מה שמבטיח לכם שקט נפשי ומוטיבציה גבוהה מצדנו להצלחת התהליך."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 pb-32 relative overflow-hidden" id="faq">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-oneshot-dark to-oneshot-green/20"></div>
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-oneshot-gold/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-oneshot-red/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <div className="bg-oneshot-gold/20 p-4 rounded-full mb-4">
            <HelpCircle className="w-12 h-12 text-oneshot-gold" />
          </div>
          <h2 className="text-5xl font-extrabold mb-4 text-center text-white">
            שאלות <span className="gradient-text">נפוצות</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-oneshot-gold to-oneshot-red"></div>
          <p className="text-oneshot-light mt-6 text-lg text-center max-w-2xl">
            מצאו תשובות לשאלות הנפוצות ביותר על תהליך רישיון הנשק ותהליך העבודה שלנו
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto glass-gold py-2 px-2 rounded-3xl">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <motion.div key={index} variants={item as any}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-oneshot-gold/30 rounded-xl overflow-hidden bg-oneshot-dark/50 backdrop-blur-md"
                  >
                    <AccordionTrigger className="px-8 py-5 text-right font-bold group">
                      <span className="text-lg text-white group-hover:text-oneshot-gold transition-colors duration-300">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 py-6 text-right border-t border-oneshot-gold/10 bg-oneshot-dark/30">
                      <p className="text-oneshot-light text-md leading-relaxed">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-white">יש לכם שאלה נוספת? אל תהססו לפנות אלינו</p>
          <div 
            onClick={redirectToWhatsApp}
            className="inline-block mt-4 bg-oneshot-gold/10 px-6 py-3 rounded-full border border-oneshot-gold/20 text-oneshot-gold hover:bg-oneshot-gold/20 transition-all cursor-pointer"
          >
            פתיחת WhatsApp לשאלות
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
