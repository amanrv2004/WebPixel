import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const founders = [
    { 
      name: "Aman Raj Verma", 
      role: "Founder & CEO", 
      image: "/Founder.jpeg",
      bio: "Aman Raj Verma is the founder and CEO of WebPixel. He is passionate about design, technology, and helping businesses build a strong online presence. With experience in web design and digital solutions, he leads WebPixel in creating modern, high-performing websites for clients worldwide."
    },
    { 
      name: "Ashutosh Verma", 
      role: "Co-Founder & CMO", 
      image: "/Co-founder.jpeg",
      bio: "Ashutosh leads our marketing and growth strategies, ensuring WebPixel becomes a trusted digital partner for businesses worldwide."
    }
  ];

  const team = [
    { 
      name: "Aman Raj Verma", 
      role: "Full Stack Developer(MERN), App Developer", 
      image: "/Founder.jpeg", 
      bio: "Expert in MERN stack and cross-platform mobile application development." 
    },
    { 
      name: "Ashutosh Verma", 
      role: "Frontend Developer and Django Developer", 
      image: "/Co-founder.jpeg", 
      bio: "Specializing in interactive user interfaces and robust Python-based backends." 
    },
    { 
      name: "Ajay Kumar", 
      role: "Digital Marketer and DevOps Engineer", 
      image: "/Ajay.jpeg", 
      bio: "Bridging the gap between high-performance infrastructure and strategic digital growth." 
    },
    { 
      name: "Vikram Kumar", 
      role: "QA ( Tester ) and SEO", 
      image: "/vikram.jpeg", 
      bio: "Ensuring flawless quality standards and peak search engine visibility." 
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="about-main-section">
        <div className="container">
          <motion.div 
            className="about-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginInline: 'auto' }}
          >
            <span className="about-tag">ABOUT WEBPIXEL</span>
            <h1 className="about-title">
              We build digital experiences that <span className="emphasis">inspire and perform.</span>
            </h1>
            <div className="about-intro" style={{ margin: '0 auto' }}>
              <p>WebPixel was founded with a clear mission: to help businesses grow with powerful and beautifully designed websites. We believe that a great website is the foundation of a successful online business.</p>
              <p>Our vision is to become a trusted digital partner for businesses worldwide, delivering solutions that combine stunning aesthetics with robust functionality and speed.</p>
            </div>
          </motion.div>

          <div className="founders-section">
            <h2 className="section-title">Founder & Co-Founder</h2>
            <motion.div 
              className="founders-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {founders.map((founder, index) => (
                <motion.div 
                  key={index} 
                  className="founder-card glass-card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="founder-img">
                    <img src={founder.image} alt={founder.name} />
                  </div>
                  <div className="founder-info">
                    <h3>{founder.name}</h3>
                    <p className="role">{founder.role}</p>
                    <p className="bio">{founder.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="team-section">
            <h2 className="section-title">Our Expert Team</h2>
            <motion.div 
              className="team-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {team.map((member, index) => (
                <motion.div 
                  key={index} 
                  className="team-member-card glass-card"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="member-img">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p className="role">{member.role}</p>
                    <p className="short-bio">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="about-quote-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="quote-text">
              "A great website is the foundation of a successful online business."
            </p>
            <div className="quote-author">
              <h4>Aman Raj Verma</h4>
              <p>Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
