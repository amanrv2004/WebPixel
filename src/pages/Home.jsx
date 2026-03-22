import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Summary from '../components/sections/Summary';
import Services from '../components/sections/Services';
import WhoWeServe from '../components/sections/WhoWeServe';
import PortfolioSection from '../components/sections/PortfolioSection';
import AboutSection from '../components/sections/AboutSection';
import FAQ from '../components/sections/FAQ';

const Home = () => {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Summary />
      <Services />
      <WhoWeServe />
      <PortfolioSection />
      <AboutSection />
      <FAQ />
    </motion.div>
  );
};

export default Home;
