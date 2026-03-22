import React from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import '../../pages/About.css';

const AboutSection = () => {
  const revealRef = useScrollReveal();
  
  const founders = [
    { 
      name: "Aman Raj Verma", 
      role: "Founder & CEO", 
      image: "/Founder.jpeg",
      bio: "Aman Raj Verma leads WebPixel with a passion for design and technology, creating modern digital solutions for clients worldwide."
    },
    { 
      name: "Ashutosh Verma", 
      role: "Co-Founder & CMO", 
      image: "/Co-founder.jpeg",
      bio: "Ashutosh drives our marketing strategy and growth, helping businesses build a powerful and lasting online presence."
    }
  ];

  return (
    <section className="about-main-section">
      <div ref={revealRef} className="container reveal">
        <div className="about-header" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="about-tag">ABOUT WEBPIXEL</span>
          <h2 className="about-title">
            We build digital experiences that <span className="emphasis">inspire and perform.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.7', margin: '0 auto' }}>
            WebPixel was created to help businesses succeed online with modern, high-performing websites. 
            We believe that a great website is the foundation of a successful online business.
          </p>
        </div>

        <div className="founders-grid">
          {founders.map((founder, index) => (
            <motion.div 
              key={index} 
              className="founder-card glass-card"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="founder-img">
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <p className="role">{founder.role}</p>
                <p className="bio" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{founder.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="about-quote-card glass-card">
          <p className="quote-text">
            "A great website is the foundation of a successful online business."
          </p>
          <div className="quote-author">
            <h4>Aman Raj Verma</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
