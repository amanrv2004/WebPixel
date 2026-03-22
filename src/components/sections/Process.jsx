import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { Search, PenTool, Code, CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "We research your market and competitors to build a winning strategy.",
      icon: Search
    },
    {
      title: "Design & Planning",
      desc: "Our designers create a unique look and feel for your new website.",
      icon: PenTool
    },
    {
      title: "Development",
      desc: "We turn designs into reality using the latest high-performance code.",
      icon: Code
    },
    {
      title: "Launch & Support",
      desc: "We ensure a smooth launch and provide ongoing maintenance.",
      icon: CheckCircle
    }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <SectionHeader 
          title="Our Working Process" 
          subtitle="How we take your idea from concept to a high-performing digital reality."
        />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <div key={index} style={{
              textAlign: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '1rem',
              border: '1px solid #e5e7eb',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--primary-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
