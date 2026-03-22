import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, subtitle, centered = true, style }) => {
  return (
    <div className={`section-header ${centered ? 'centered' : ''}`} style={style}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-underline"></div>
    </div>
  );
};

export default SectionHeader;
