import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FAQ.css';

const Testimonials = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="testimonials-section">
      <div ref={revealRef} className="container reveal">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            What our clients are <span className="emphasis">saying.</span>
          </h2>
        </div>

        <div className="testimonial-large">
          <span className="client-name-tag">STUDY HUB</span>
          <blockquote className="testimonial-quote">
            “These guys are the real deal. Effective, efficient, and a pleasure to work with. The team quickly understood and was able to help us better articulate the nuances of our business. Would highly recommend working with them.”
          </blockquote>
          
          <div className="testimonial-client">
            <div className="client-info">
              <h4>Ashish Kumar</h4>
              <p>Owner of Study Hub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
