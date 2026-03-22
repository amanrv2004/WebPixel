import React from 'react';
import { motion } from 'framer-motion';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon: Icon, gradient = false }) => {
  return (
    <motion.div 
      className={`service-card-modern-animated ${gradient ? 'service-gradient' : ''} glass-card`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="service-card-content">
        <div className="service-icon-wrapper-animated">
          <Icon className="service-icon-animated" size={32} />
        </div>
        <h3 className="service-title-animated">{title}</h3>
        <p className="service-description-animated">{description}</p>
      </div>
      <div className="service-card-shine" />
    </motion.div>
  );
};

export default ServiceCard;
