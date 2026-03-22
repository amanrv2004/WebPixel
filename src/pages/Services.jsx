import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ui/ServiceCard';
import WhoWeServe from '../components/sections/WhoWeServe';
import { Layout, Code, Rocket, Layers, Smartphone, Gauge } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "Custom Website Design",
      description: "Unique, eye-catching designs tailored to your brand identity and business goals.",
      icon: Layout
    },
    {
      title: "Website Development",
      description: "High-performance websites built with modern technologies like React, Next.js, and Node.js.",
      icon: Code
    },
    {
      title: "Landing Page Design",
      description: "Conversion-focused landing pages designed to turn visitors into paying customers.",
      icon: Rocket
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user interfaces and engaging experiences that keep users coming back.",
      icon: Layers
    },
    {
      title: "Website Redesign",
      description: "Give your outdated website a fresh, modern look with improved functionality.",
      icon: Smartphone
    },
    {
      title: "Website Optimization",
      description: "Speed and performance optimization to ensure your site loads instantly on all devices.",
      icon: Gauge
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="services-page" 
      style={{ paddingTop: '80px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="services-list">
        <div className="container">
          <SectionHeader 
            title="Our Digital Services" 
            subtitle="We offer comprehensive web solutions to help your business grow and thrive in the digital landscape."
          />
          <motion.div 
            className="services-grid" 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhoWeServe />

      <section className="cta-section" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <SectionHeader 
            title="Ready to Start Your Project?" 
            subtitle="Let's build something amazing together. Contact us today for a free consultation."
          />
          <a href="/contact" className="btn btn-primary" style={{ display: 'inline-flex', margin: '0 auto' }}>Get a Free Quote</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
