import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Static",
      price: "4,999",
      features: [
        "Up to 5 Pages",
        "Lightning Fast Loading",
        "Fully Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support"
      ],
      recommended: false
    },
    {
      name: "Full Stack Simple",
      price: "14,999",
      features: [
        "Dynamic Content",
        "Admin Dashboard",
        "Database Integration",
        "User Authentication",
        "Up to 10 Pages",
        "3 Months Support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "20,999",
      features: [
        "Custom UI/UX Design",
        "Advanced Animations",
        "E-commerce Ready",
        "Performance Optimization",
        "SEO Mastery",
        "6 Months Support"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "28,999",
      features: [
        "Enterprise Solutions",
        "Complex Web Apps",
        "Third-party APIs",
        "Cloud Hosting Setup",
        "Priority 24/7 Support",
        "1 Year Maintenance"
      ],
      recommended: false
    }
  ];

  return (
    <motion.div 
      className="pricing-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pricing-hero">
        <div className="container">
          <SectionHeader 
            title="Strategic Pricing" 
            subtitle="Transparent investment plans for every stage of your business growth."
          />
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <motion.div 
                key={index} 
                className={`pricing-card glass-card ${plan.recommended ? 'recommended' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.recommended && <div className="badge">Best Value</div>}
                <div className="card-header">
                  <h3>{plan.name}</h3>
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">{plan.price}</span>
                    <span className="period">/Starting</span>
                  </div>
                </div>
                <ul className="features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <Check size={18} className="icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Pricing;
