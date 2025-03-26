import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ProductShowcase from '@/components/ProductShowcase';
import WhatsAppRedirect from '@/components/WhatsAppRedirect';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-oneshot-dark text-white" dir="rtl">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="product-showcase">
        <ProductShowcase />
      </div>
      <div id="contact-form">
        <WhatsAppRedirect />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
