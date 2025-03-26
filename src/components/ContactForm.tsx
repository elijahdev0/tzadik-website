import React, { useState, useEffect } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Loader2, 
  CheckCircle, 
  Send, 
  AlertTriangle, 
  Mail,
  User,
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { sendEmail } from '@/lib/emailService';
import { motion, AnimatePresence } from "framer-motion";

// Email validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "נא להזין שם מלא" }),
  email: z.string().email({ message: "נא להזין כתובת אימייל תקינה" }),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  message: z.string().min(5, { message: "נא להזין הודעה" }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [showSparkle, setShowSparkle] = useState(false);

  // Track mouse position for the parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show sparkle animation when form is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowSparkle(true);
          setTimeout(() => setShowSparkle(false), 2000);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact-form');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    setError(null);
    
    try {
      const success = await sendEmail({
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message
      });

      if (success) {
        setIsSuccess(true);
        setShowSparkle(true);
        setTimeout(() => setShowSparkle(false), 2000);
        form.reset();
      } else {
        setError('אירעה שגיאה בשליחת הטופס. נא לנסות שוב מאוחר יותר.');
      }
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('אירעה שגיאה בשליחת הטופס. נא לנסות שוב מאוחר יותר.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerStyle = {
    '--mouse-x': `${mousePosition.x}px`,
    '--mouse-y': `${mousePosition.y}px`
  } as React.CSSProperties;

  return (
    <section 
      id="contact-form" 
      className="relative py-24 overflow-hidden bg-gradient-to-b from-oneshot-dark via-oneshot-green/40 to-oneshot-dark"
      style={containerStyle}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-oneshot-gold/30 blur-xl animate-pulse"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Parallax elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none"
        style={{
          transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 50}px, ${(mousePosition.y - window.innerHeight / 2) / 50}px)`,
        }}
      >
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-oneshot-gold/20 rounded-full"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <AnimatePresence>
          {showSparkle && (
            <motion.div 
              className="absolute inset-0 pointer-events-none z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles 
                className="absolute text-oneshot-gold h-12 w-12 animate-pulse" 
                style={{ 
                  top: '10%', 
                  left: '20%', 
                  animationDelay: '0.2s' 
                }}
              />
              <Sparkles 
                className="absolute text-oneshot-gold h-8 w-8 animate-pulse" 
                style={{ 
                  top: '30%', 
                  right: '15%', 
                  animationDelay: '0.5s' 
                }}
              />
              <Sparkles 
                className="absolute text-oneshot-gold h-10 w-10 animate-pulse" 
                style={{ 
                  bottom: '20%', 
                  left: '30%', 
                  animationDelay: '0.8s' 
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="backdrop-blur-xl bg-gradient-to-br from-oneshot-dark/90 to-oneshot-green/70 p-10 rounded-3xl shadow-[0_0_50px_rgba(212,176,83,0.15)] border-2 border-oneshot-gold/30"
            whileHover={{ boxShadow: '0 0 70px rgba(212,176,83,0.25)' }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundPosition: `calc(50% + ${(mousePosition.x - window.innerWidth / 2) / 30}px) calc(50% + ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
            }}
          >
            <motion.div 
              className="absolute -top-10 right-10 h-20 w-20 rounded-full bg-gradient-to-br from-oneshot-gold to-oneshot-red/70 blur-xl opacity-40"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-10 left-10 h-20 w-20 rounded-full bg-gradient-to-tr from-oneshot-green to-oneshot-gold/70 blur-xl opacity-40"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />

            <motion.h2 
              className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-oneshot-gold via-white to-oneshot-gold drop-shadow-[0_0_15px_rgba(212,176,83,0.5)]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              השאירו פרטים ונחזור אליכם בהקדם
            </motion.h2>
            
            {isSuccess ? (
              <motion.div 
                className="flex flex-col items-center justify-center text-center space-y-6 py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 20, 
                    delay: 0.2 
                  }}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-400 opacity-75 blur-sm animate-pulse" />
                  <div className="relative bg-oneshot-dark/90 rounded-full p-4">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                  </div>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  תודה על פנייתך!
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  ההודעה נשלחה בהצלחה, ניצור איתך קשר בהקדם.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Button 
                    variant="outline" 
                    className="mt-4 border-oneshot-gold text-oneshot-gold hover:bg-oneshot-gold/10 transition-all duration-300 hover:scale-105"
                    onClick={() => setIsSuccess(false)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    שליחת הודעה נוספת
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FormLabel className="flex items-center text-white text-lg">
                            <User className="mr-2 h-4 w-4 text-oneshot-gold" />
                            שם מלא
                          </FormLabel>
                        </motion.div>
                        <FormControl>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            onFocus={() => setActiveField("name")}
                            onBlur={() => setActiveField(null)}
                            className="relative"
                          >
                            <div className={`absolute inset-0 bg-oneshot-gold/20 rounded-md blur-md transition-opacity duration-300 ${activeField === "name" ? "opacity-100" : "opacity-0"}`} />
                            <Input 
                              placeholder="הכנס את שמך המלא" 
                              {...field} 
                              className="relative border-oneshot-gold/30 bg-oneshot-dark/70 text-white placeholder-oneshot-gold/50 focus:border-oneshot-gold focus:ring-2 focus:ring-oneshot-gold/50 transition-all duration-300"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <FormLabel className="flex items-center text-white text-lg">
                            <Mail className="mr-2 h-4 w-4 text-oneshot-gold" />
                            אימייל
                          </FormLabel>
                        </motion.div>
                        <FormControl>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            onFocus={() => setActiveField("email")}
                            onBlur={() => setActiveField(null)}
                            className="relative"
                          >
                            <div className={`absolute inset-0 bg-oneshot-gold/20 rounded-md blur-md transition-opacity duration-300 ${activeField === "email" ? "opacity-100" : "opacity-0"}`} />
                            <Input 
                              placeholder="אימייל ליצירת קשר" 
                              type="email" 
                              {...field} 
                              className="relative border-oneshot-gold/30 bg-oneshot-dark/70 text-white placeholder-oneshot-gold/50 focus:border-oneshot-gold focus:ring-2 focus:ring-oneshot-gold/50 transition-all duration-300"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <FormLabel className="flex items-center text-white text-lg">
                            <Phone className="mr-2 h-4 w-4 text-oneshot-gold" />
                            טלפון
                          </FormLabel>
                        </motion.div>
                        <FormControl>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileFocus={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            onFocus={() => setActiveField("phone")}
                            onBlur={() => setActiveField(null)}
                            className="relative"
                          >
                            <div className={`absolute inset-0 bg-oneshot-gold/20 rounded-md blur-md transition-opacity duration-300 ${activeField === "phone" ? "opacity-100" : "opacity-0"}`} />
                            <Input 
                              placeholder="מספר טלפון" 
                              type="tel" 
                              {...field}
                              className="relative border-oneshot-gold/30 bg-oneshot-dark/70 text-white placeholder-oneshot-gold/50 focus:border-oneshot-gold focus:ring-2 focus:ring-oneshot-gold/50 transition-all duration-300"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <FormLabel className="flex items-center text-white text-lg">
                            <MessageSquare className="mr-2 h-4 w-4 text-oneshot-gold" />
                            הודעה
                          </FormLabel>
                        </motion.div>
                        <FormControl>
                          <motion.div
                            whileHover={{ scale: 1.01 }}
                            whileFocus={{ scale: 1.01 }}
                            transition={{ duration: 0.2 }}
                            onFocus={() => setActiveField("message")}
                            onBlur={() => setActiveField(null)}
                            className="relative"
                          >
                            <div className={`absolute inset-0 bg-oneshot-gold/20 rounded-md blur-md transition-opacity duration-300 ${activeField === "message" ? "opacity-100" : "opacity-0"}`} />
                            <Textarea 
                              placeholder="כתוב את הודעתך כאן" 
                              {...field}
                              className="relative border-oneshot-gold/30 bg-oneshot-dark/70 text-white placeholder-oneshot-gold/50 focus:border-oneshot-gold focus:ring-2 focus:ring-oneshot-gold/50 transition-all duration-300 resize-none min-h-[150px]"
                            />
                          </motion.div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <AnimatePresence>
                    {error && (
                      <motion.div 
                        className="bg-red-900/30 border border-red-400 text-red-200 px-6 py-4 rounded-md flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertTriangle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="relative w-full overflow-hidden group"
                    >
                      <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-oneshot-gold via-oneshot-gold/80 to-oneshot-gold group-hover:scale-102" />
                      <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                      <span className="relative z-10 flex items-center justify-center text-black font-bold px-8 py-3">
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            <span>שולח...</span>
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="mr-2 h-5 w-5" />
                            <span>שלח הודעה</span>
                          </div>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </Form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
