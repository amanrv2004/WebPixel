import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter, Globe, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-top-new">
          <div className="footer-brand-new">
            <Link to="/" className="logo">
              <span>WEB PIXEL</span>
            </Link>
            <h3 className="footer-tagline">
              Let's build something <span className="emphasis">extraordinary</span> together.
            </h3>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>SERVICES</h4>
              <ul>
                <li><Link to="/services">Web Design</Link></li>
                <li><Link to="/services">Development</Link></li>
                <li><Link to="/services">UI/UX Design</Link></li>
                <li><Link to="/services">Optimization</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>COMPANY</h4>
              <ul>
                <li><Link to="/portfolio">Work</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col footer-contact-col">
              <h4>CONTACT</h4>
              <p><a href="mailto:webpixel001@gmail.com">webpixel001@gmail.com</a></p>
              <p><a href="tel:+919219026143">+91 92190 26143</a></p>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Greater+Noida,+India" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Greater Noida, India
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-new">
          <div className="footer-bottom-info">
            <div className="copyright">
              © 2026 WEB PIXEL. All rights reserved.
            </div>
            <div className="developer-credit">
              Developed by <span className="dev-name">Aman Raj Verma</span>
            </div>
          </div>
          <div className="footer-bottom-right">
            <div className="footer-socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
            </div>
            <div className="footer-lang">
              <Globe size={18} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
