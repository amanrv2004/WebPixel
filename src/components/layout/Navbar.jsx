import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledMore, setScrolledMore] = useState(false);
  const location = useLocation();

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setScrolledMore(window.scrollY > 150); // Threshold for fade effect
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${scrolledMore ? 'fade-out' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span>WEB PIXEL</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>SERVICES</Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>WORK</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>ABOUT</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>PRICING</Link>
          <Link to="/contact" className="nav-cta">Get Started</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
