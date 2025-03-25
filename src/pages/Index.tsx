import React from 'react';
import { Button } from "@/components/ui/button";
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-oneshot-dark text-white" dir="rtl">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
