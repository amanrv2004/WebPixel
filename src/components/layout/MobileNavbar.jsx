import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Briefcase, Layout, User, Send } from 'lucide-react';
import './MobileNavbar.css';

const MobileNavbar = () => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav-container">
        <NavLink to="/" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <Home size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <Layout size={20} />
          <span>Services</span>
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <Briefcase size={20} />
          <span>Work</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <User size={20} />
          <span>About</span>
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'mobile-nav-item active' : 'mobile-nav-item'}>
          <Send size={20} />
          <span>Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default MobileNavbar;
