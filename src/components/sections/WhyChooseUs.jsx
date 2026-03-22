import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const revealRef = useScrollReveal();
  return (
    <section className="cta-section-new">
      <div ref={revealRef} className="container reveal">
        <div className="cta-banner-new">
          <div className="badge-circular">
            <svg viewBox="0 0 100 100" className="rotate">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text font-size="8.5" font-weight="700">
                <textPath xlinkHref="#circlePath">
                  TRUSTED • LOVED • RECOMMENDED • 
                </textPath>
              </text>
            </svg>
            <div className="badge-icon">★</div>
          </div>
          
          <span className="cta-tag-new">LET'S ORBIT</span>
          <h2 className="cta-title-new">
            Let us help your company<br />
            accelerate <span className="emphasis">years ahead.</span>
          </h2>
          
          <button className="btn btn-dark-new">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
