import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(20px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="hero-luxury">
      <motion.div 
        className="container hero-container"
        style={{ y, opacity }}
      >
        <motion.div 
          className="hero-content-luxury"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-top-badge" variants={itemVariants}>
            <span className="badge-dot" />
            <span className="badge-text">Available for new projects</span>
          </motion.div>

          <motion.h1 className="hero-title-luxury" variants={itemVariants}>
            Elevating brands<br />
            through <span className="emphasis">digital</span> art.
          </motion.h1>
          
          <motion.p className="hero-subtitle-luxury" variants={itemVariants}>
            We combine high-end design with world-class engineering to 
            build digital products that define industries.
          </motion.p>

          <motion.div className="hero-btns-luxury" variants={itemVariants}>
            <motion.button 
              className="btn btn-primary" 
              onClick={() => navigate('/contact')}
            >
              Start a Project
            </motion.button>
            <motion.button 
              className="btn btn-secondary" 
              onClick={() => navigate('/portfolio')}
            >
              View Gallery
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Cinematic Background Elements */}
      <div className="hero-visuals">
        <div className="luxury-grid" />
        <div className="luxury-glow" />
      </div>
    </section>
  );
};

export default Hero;
