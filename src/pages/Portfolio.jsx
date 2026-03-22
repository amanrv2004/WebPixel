import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "GeoAlarm",
      category: "Location Intelligence",
      image: "/GeoAlarm.png",
      description: "Next-gen geographic notification system.",
      tech: ["React", "Geolocation", "Firebase"],
      size: "large"
    },
    {
      title: "Study Hub",
      category: "Education Platform",
      image: "/StudyHub.png",
      description: "Streamlining institutional management.",
      tech: ["Django", "Python"],
      size: "small"
    },
    {
      title: "Track My Trash",
      category: "Sustainability",
      image: "/TrackMyTrash.png",
      description: "Smart waste management system for modern cities.",
      tech: ["IoT", "React", "Node.js"],
      size: "small"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      className="portfolio-page-luxury"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="portfolio-section-luxury">
        <div className="container">
          <div className="portfolio-header-luxury">
            <span className="portfolio-tag-luxury">PORTFOLIO</span>
            <h2 className="portfolio-title-luxury">
              Crafting digital<br />
              <span className="emphasis">excellence.</span>
            </h2>
            <p className="portfolio-subtitle-luxury" style={{ marginTop: '2rem', color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginInline: 'auto' }}>
              A curated selection of our most impactful projects where design meets technical precision.
            </p>
          </div>

          <motion.div 
            className="portfolio-bento-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className={`portfolio-item-luxury ${project.size}`}
                variants={itemVariants}
              >
                <div className="portfolio-card-luxury">
                  <div className="portfolio-visual-luxury">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="portfolio-content-luxury">
                    <div className="project-meta-luxury">
                      <span className="project-cat-luxury">{project.category}</span>
                      <h3 className="project-title-luxury">{project.title}</h3>
                    </div>
                    <div className="project-tech-list">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-pill-luxury">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
