import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CONSULTING_CARDS = [
  {
    title: 'Finance Transformation Advisory',
    description: 'Assess your current finance processes, identify gaps, and build a practical roadmap for transformation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'EPM & Planning Consulting',
    description: 'Design and optimize budgeting, forecasting, workforce planning, revenue planning, and reporting solutions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <path d="M7 16V8h2v8H7zm4 0V5h2v11h-2zm4 0v-6h2v6h-2z" />
      </svg>
    ),
  },
  {
    title: 'Solution Architecture',
    description: 'Design scalable application, data, integration, security, and reporting architectures aligned with your business needs.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="3" width="6" height="6" rx="1" />
        <rect x="1" y="14" width="6" height="6" rx="1" />
        <rect x="17" y="14" width="6" height="6" rx="1" />
        <path d="M12 9v3M4 12h16v2" />
      </svg>
    ),
  },
  {
    title: 'Process Optimization',
    description: 'Simplify manual processes, strengthen controls, and unlock opportunities for automation and efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="16" r="4" />
        <path d="M8 12v3a1 1 0 0 0 1 1h3M12 8h3a1 1 0 0 1 1 1v3" />
      </svg>
    ),
  },
  {
    title: 'Application Health Check',
    description: 'Evaluate your existing Oracle EPM or NetSuite Planning environment and identify opportunities to improve performance, usability, and scalability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI & Automation Consulting',
    description: 'Identify practical use cases to apply AI and automation to reduce manual work and improve decision-making.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-3.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-3.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2z" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: 'Clear Strategy',
    description: 'A roadmap aligned with your business goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Better Decisions',
    description: 'Improved visibility for smarter decision-making.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M3 20h18" />
        <path d="m3 12 6-6 6 6 6-6" />
      </svg>
    ),
  },
  {
    title: 'Operational Excellence',
    description: 'Optimized processes and stronger controls.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Higher ROI',
    description: 'Maximize the value of your finance technology investment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 18.5a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6.5a3 3 0 0 0 3 3" />
        <path d="M12 6v12" />
        <path d="M8 10h8" />
      </svg>
    ),
  },
  {
    title: 'Future Ready Finance',
    description: 'A scalable foundation for growth and innovation.',
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

export default function ConsultingServices() {
  const containerRef = useRef(null);

  return (
    <main className="app-container" ref={containerRef}>
      {/* Navbar wrapper */}
      <div style={{ background: '#ffffff', position: 'relative', zIndex: 10 }}>
        <Navbar />
      </div>

      {/* Picture-perfect Hero Section */}
      <section className="picture-hero">
        <div className="picture-hero__container">
          <div className="picture-hero__left">
            <div className="picture-hero__eyebrow-wrap">
              <span className="picture-hero__eyebrow">CONSULTING SERVICES</span>
              <div className="picture-hero__eyebrow-line" />
            </div>
            <h1 className="picture-hero__title">
              Strategic Guidance.<br />
              Smarter Finance.<br />
              <span className="picture-hero__title-blue">Stronger Business Outcomes.</span>
            </h1>
            <p className="picture-hero__desc">
              Gooner Technologies helps finance teams transform complex challenges into scalable, technology-driven solutions. Our consultants combine finance expertise with deep experience in Oracle EPM, NetSuite, automation, integrations, and AI to deliver measurable results.
            </p>
          </div>
          <div className="picture-hero__right">
            <div className="picture-hero__img-mask">
              <img
                src="/assets/Consultingservices1.png"
                alt="Finance Transformation Roadmap presentation"
                className="picture-hero__img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Single Unified Card Box Section */}
      <section className="picture-grid-section">
        <div className="picture-grid__container">
          <div className="picture-grid-box">
            {/* Centered header label floating over top border */}
            <div className="picture-grid-box__header">
              <div className="picture-grid-box__line" />
              <span className="picture-grid-box__title">OUR CONSULTING SERVICES</span>
              <div className="picture-grid-box__line" />
            </div>

            {/* 6-Column Grid Layout */}
            <div className="picture-grid-box__wrapper">
              {CONSULTING_CARDS.map((srv) => (
                <div key={srv.title} className="picture-card-col">
                  <div className="picture-card-col__icon-wrap">
                    {srv.icon}
                  </div>
                  <h3 className="picture-card-col__title">{srv.title}</h3>
                  <p className="picture-card-col__desc">{srv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Footer Banner */}
      <section className="picture-benefits-section">
        <div className="picture-benefits__container">
          <div className="picture-benefits__left">
            <h2 className="picture-benefits__title">WHAT YOU GET</h2>
            <div className="picture-benefits__title-line" />
          </div>
          <div className="picture-benefits__right">
            {BENEFITS.map((bft) => (
              <div key={bft.title} className="benefit-col">
                <div className="benefit-col__icon-wrap">
                  {bft.icon}
                </div>
                <div className="benefit-col__content">
                  <h4 className="benefit-col__title">{bft.title}</h4>
                  <p className="benefit-col__desc">{bft.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Expertise Footer CTA */}
      <section className="cta-photo-section">
        <div className="cta-photo-container">
          <div className="cta-photo-banner">
            <div className="cta-photo__eyebrow-wrap">
              <div className="cta-photo__eyebrow-line" />
              <span className="cta-photo__eyebrow">Ready to Transform Your Finance Function?</span>
            </div>
            <h2 className="cta-photo__title">
              Turn complex finance challenges into scalable, technology and AI-driven solutions.
            </h2>
            <p className="cta-photo__desc">
              Our experts can help you assess your current environment, identify opportunities, and build a practical roadmap for finance transformation.<br /><br />
              <strong>Book a Free Finance Transformation Consultation</strong><br />
              Let's explore how Gooner Technologies can help you plan smarter, optimize processes, and create greater value from your finance technology.
            </p>
            <div className="cta-photo__buttons">
              <Link to="/contact-us" className="cta-photo-btn cta-photo-btn--solid">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
