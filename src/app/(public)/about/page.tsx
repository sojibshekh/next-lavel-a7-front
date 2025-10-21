import AboutSection from '@/components/HomePage/AboutSection';
import CTASection from '@/components/HomePage/CTASection';
import Hero from '@/components/HomePage/Hero';
import React from 'react';

const page = () => {
    return (
         <div className="flex flex-col">
      <Hero />
      <AboutSection />
   
      <CTASection />
    </div>
    );
};

export default page;