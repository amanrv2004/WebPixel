import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
import { ArrowRight } from 'lucide-react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      category: "Hospitality",
      image: "https://via.placeholder.com/600x400",
      desc: "A modern, responsive website for a high-end restaurant."
    },
    {
      title: "E-commerce Store",
      category: "Retail",
      image: "https://via.placeholder.com/600x400",
      desc: "A fully functional online store with product management."
    },
    {
      title: "Startup Landing Page",
      category: "Technology",
      image: "https://via.placeholder.com/600x400",
      desc: "A sleek landing page for a growing tech startup."
    }
  ];

  return (
    <section className="featured-projects bg-light">
      <div className="container">
        <div className="flex-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <SectionHeader 
              title="Featured Projects" 
              subtitle="Take a look at some of our recent work and how we've helped businesses like yours grow."
              style={{ marginBottom: 0, textAlign: 'left' }}
            />
          </div>
          <Link to="/portfolio" className="btn btn-secondary" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View All Work <ArrowRight size={18} />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card-featured">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <Link to="/portfolio" className="view-link">View Case Study</Link>
                </div>
              </div>
              <div className="project-info">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
