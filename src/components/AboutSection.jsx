import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import challengesPhoto from '../assets/challenges_photo.jpg';

const DIFFERENTIATORS = [
  {
    id: 'finance-first',
    title: 'Finance-First Expertise',
    description:
      'We focus exclusively on finance transformation and understand the processes, challenges, and decisions that matter to finance teams.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'oracle-netsuite',
    title: 'Oracle & NetSuite Specialists',
    description:
      'Deep implementation, optimization, integration, and support expertise across Oracle EPM and NetSuite Planning.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'ai-innovation',
    title: 'AI-Driven Innovation',
    description:
      'Practical AI solutions designed to solve real finance problems, automate repetitive work, and improve decision-making.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-2.65 5.85a1 1 0 0 0-.35.75v1.4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1.4a1 1 0 0 0-.35-.75C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="9" y1="22" x2="15" y2="22" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    title: 'End-to-End Partnership',
    description:
      'From advisory and implementation to optimization and ongoing support, we remain a partner beyond go-live.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="why-us" className="why-gooner-section sticky-section-wrapper" aria-label="Why Gooner Technologies">
      <div className="why-ambient-glow why-ambient-glow--top" aria-hidden="true" />
      <div className="why-ambient-glow why-ambient-glow--bottom" aria-hidden="true" />
      
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', paddingTop: '40px' }}>
        <div className="why-divider__center-node">
          <span>WHY GOONER TECHNOLOGIES</span>
        </div>
      </div>

      <div className="sticky-layout-container">
        
        {/* LEFT COLUMN: SCROLLING CARDS */}
        <div className="sticky-cards-column">
          {DIFFERENTIATORS.map((diff) => (
            <div key={diff.id} className="sticky-card-item">
              <div className="sticky-card-icon">
                {diff.icon}
              </div>
              <div className="sticky-card-text">
                <h3 className="sticky-card-title">{diff.title}</h3>
                <p className="sticky-card-desc">{diff.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: STICKY HEADING */}
        <div className="sticky-header-column">
          <div
            className="sticky-header-content"
            style={{
              backgroundImage: `linear-gradient(rgba(6, 16, 34, 0.65), rgba(6, 16, 34, 0.75)), url(${challengesPhoto})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '16px',
              padding: '40px 36px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h2 className="sticky-main-title">Why Finance Leaders Choose Gooner Technologies</h2>
            <p className="sticky-main-desc">
              We combine deep finance expertise, enterprise technology, and AI-driven innovation to help
              organizations modernize planning, reporting, financial close, and operational efficiency.
            </p>
            <div className="sticky-actions">
              <Link to="/contact-us" className="sticky-btn sticky-btn--primary" style={{ textDecoration: 'none' }}>Book Consultation</Link>
              <Link to="/faqs" className="sticky-btn sticky-btn--secondary" style={{ textDecoration: 'none' }}>QUESTIONS?</Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
