import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShoppingBag, Building2, Stethoscope, GraduationCap, Briefcase } from 'lucide-react';
import './WhoWeServe.css';

const WhoWeServe = () => {
  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Cafes",
      desc: "Digital menus, online ordering systems, and table reservation platforms designed to boost your food business."
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      desc: "High-conversion online stores with secure payments and inventory management for retail success."
    },
    {
      icon: Building2,
      title: "Real Estate",
      desc: "Property listing portals with advanced search, virtual tours, and lead generation tools for agents."
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Appointment scheduling, patient portals, and secure medical service websites for doctors and clinics."
    },
    {
      icon: GraduationCap,
      title: "Education",
      desc: "Learning management systems, course portals, and institutional websites for schools and trainers."
    },
    {
      icon: Briefcase,
      title: "Corporate & Professional",
      desc: "Professional agency websites, legal firm portals, and consultancy platforms that build authority."
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="who-we-serve">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-tag">INDUSTRIES WE EMPOWER</span>
          <h2 className="section-title">
            Tailored solutions for every <span className="emphasis">business type.</span>
          </h2>
          <p className="section-subtitle">
            We specialize in building niche-specific digital products that address the unique challenges of your industry.
          </p>
        </div>

        <motion.div 
          className="industries-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="industry-card glass-card"
              variants={itemVariants}
            >
              <div className="industry-icon-wrapper">
                <industry.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="industry-title">{industry.title}</h3>
              <p className="industry-desc">{industry.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
