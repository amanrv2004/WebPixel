import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Services.css';

const Services = () => {
  const revealRef = useScrollReveal();
  const services = [
    { 
      id: '01', 
      title: "Static Website Design", 
      desc: "Lightning-fast, secure, and SEO-optimized static sites built with modern frameworks for maximum performance and reliability." 
    },
    { 
      id: '02', 
      title: "Dynamic (Full Stack)", 
      desc: "Scalable, feature-rich web applications with robust backends, real-time databases, and seamless user management." 
    },
    { 
      id: '03', 
      title: "Website Maintenance", 
      desc: "Ongoing support, security patches, and performance tuning to ensure your digital presence stays ahead of the curve." 
    },
    { 
      id: '04', 
      title: "UI/UX Strategy", 
      desc: "User-centric design systems that bridge the gap between business goals and user needs through intuitive interfaces." 
    },
    { 
      id: '05', 
      title: "E-commerce Solutions", 
      desc: "Full-scale online stores with secure payment gateways, inventory management, and high-conversion checkout flows." 
    },
    { 
      id: '06', 
      title: "Performance & SEO", 
      desc: "Deep technical optimization to boost your Core Web Vitals and ensure your business ranks at the top of search results." 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="services-section">
      <div className="container">
        <motion.div 
          ref={revealRef}
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="services-tag">OUR EXPERTISE</span>
          <h2 className="section-title-large">
            Solutions tailored for <span className="emphasis">growth.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="services-grid-modern"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="service-card-modern glass-card"
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: "var(--primary-color)" }}
            >
              <div className="service-number">{service.id}</div>
              <h3 className="service-title-modern">{service.title}</h3>
              <p className="service-desc-modern">{service.desc}</p>
              <div className="service-glow"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
