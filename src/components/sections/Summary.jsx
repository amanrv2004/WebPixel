import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Summary = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="summary" style={{ padding: '10rem 0', textAlign: 'center', background: 'transparent' }}>
      <div ref={revealRef} className="container reveal">
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
          fontWeight: 600, 
          lineHeight: 1.4,
          maxWidth: '1000px',
          margin: '0 auto',
          color: 'var(--text-white)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          WEBPIXEL IS A <span className="emphasis" style={{ textTransform: 'lowercase' }}>full-service</span> WEB DESIGN AND DEVELOPMENT AGENCY <span className="emphasis" style={{ textTransform: 'lowercase' }}>that helps</span> STARTUPS <span className="emphasis" style={{ textTransform: 'lowercase' }}>and</span> ESTABLISHED BRANDS GROW <span className="emphasis" style={{ textTransform: 'lowercase' }}>faster.</span>
        </h2>
      </div>
    </section>
  );
};

export default Summary;
