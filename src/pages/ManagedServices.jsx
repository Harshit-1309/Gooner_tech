import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import managedHeroImg from '../assets/managed_services_hero.png';

// Service list items
const MANAGED_SERVICES_CARDS = [
  {
    title: 'Application Support',
    description: 'Resolve functional and technical issues quickly to minimize disruptions and keep your finance team productive.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Application Administration',
    description: 'Manage users, security, metadata, rules, forms, reports and application configurations.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Data & Integration Support',
    description: 'Monitor and support data loads, integrations and connections across ERP, EPM and third-party systems.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    )
  },
  {
    title: 'Model Maintenance',
    description: 'Update and manage dimensions, assumptions, rules, and scripts as your business evolves.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: 'Reporting & Analytics Support',
    description: 'Build and enhance reports, dashboards and management reporting to deliver accurate insights.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  },
  {
    title: 'Performance Optimization',
    description: 'Identify bottlenecks, improve calculations and optimize application performance and efficiency.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Enhancements & Change Requests',
    description: 'Implement new requirements, reports, integrations and process improvements seamlessly.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Continuous Improvement',
    description: 'Proactively identify opportunities to automate, optimize and introduce new capabilities that drive business value.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

// Advantage points at the bottom banner
const ADVANTAGE_POINTS = [
  {
    title: 'Experienced Experts',
    description: 'Deep Oracle EPM & NetSuite knowledge across industries',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Faster Resolution',
    description: 'Quick response and resolution to keep your business moving',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Reduced Risk',
    description: 'Proactive monitoring and best practices ensure stability and compliance',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Cost Effective',
    description: 'Flexible engagement models that reduce cost and improve operational efficiency',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'More Business Value',
    description: 'Focus on strategic initiatives while we take care of the day-to-day',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
      </svg>
    )
  }
];

export default function ManagedServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-container">
      <Navbar />

      {/* Hero Section */}
      <section className="managed-hero">
        <div className="managed-hero__left">
          <div className="managed-hero__eyebrow-wrap">
            <span className="managed-hero__eyebrow">MANAGED SERVICES</span>
            <div className="managed-hero__eyebrow-line" />
          </div>
          <h1 className="managed-hero__title">
            Reliable Support.<br />
            Continuous Improvement.<br />
            <span className="managed-hero__title-blue">Maximum Value from Your Finance Systems.</span>
          </h1>
          <p className="managed-hero__desc">
            Gooner Technologies provides end-to-end managed services to keep your Oracle EPM and NetSuite environments running smoothly, securely, and aligned with your business.
          </p>

          {/* Symmetrical 4-point pill layout */}
          <div className="managed-hero__grid-pills">
            <div className="hero-pill">
              <span className="hero-pill__icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <span className="hero-pill__text">Proactive Support</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill__icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              <span className="hero-pill__text">Improved Performance</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill__icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                </svg>
              </span>
              <span className="hero-pill__text">Operational Excellence</span>
            </div>
            <div className="hero-pill">
              <span className="hero-pill__icon">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <span className="hero-pill__text">Focus on What Matters</span>
            </div>
          </div>
        </div>

        {/* Right side Operations Room with benefits list overlay */}
        <div className="managed-hero__right">
          <div className="managed-hero__img-container">
            <img
              src={managedHeroImg}
              alt="Operations control room dashboard monitoring"
              className="managed-hero__img"
            />
            {/* Gradient Mask Overlay */}
            <div className="managed-hero__img-overlay" />

            {/* Partner logos inside the image container */}
            <div className="managed-hero__logos">
              <div className="logo-badge">
                <span className="logo-badge__top">ORACLE</span>
                <span className="logo-badge__bottom">Cloud EPM</span>
              </div>
              <div className="logo-divider" />
              <div className="logo-badge">
                <span className="logo-badge__top">ORACLE</span>
                <span className="logo-badge__bottom">NetSuite</span>
              </div>
              <div className="logo-badge__cloud">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
            </div>

            {/* Vertical list of key points */}
            <div className="managed-hero__overlay-list">
              <div className="overlay-point">
                <div className="overlay-point__icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="overlay-point__content">
                  <h4 className="overlay-point__title">EXPERT SUPPORT</h4>
                  <p className="overlay-point__desc">Experienced EPM & NetSuite specialists</p>
                </div>
              </div>

              <div className="overlay-point">
                <div className="overlay-point__icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="overlay-point__content">
                  <h4 className="overlay-point__title">PROACTIVE MONITORING</h4>
                  <p className="overlay-point__desc">Detect, prevent and resolve issues early</p>
                </div>
              </div>

              <div className="overlay-point">
                <div className="overlay-point__icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="overlay-point__content">
                  <h4 className="overlay-point__title">CONTINUOUS IMPROVEMENT</h4>
                  <p className="overlay-point__desc">Optimize performance and drive more value</p>
                </div>
              </div>

              <div className="overlay-point">
                <div className="overlay-point__icon">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="overlay-point__content">
                  <h4 className="overlay-point__title">SECURE & COMPLIANT</h4>
                  <p className="overlay-point__desc">Keep your data safe and compliant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Box Section */}
      <section className="managed-grid-section">
        <div className="managed-grid__container">
          <div className="managed-grid-box">
            {/* Centered header label floating over top border */}
            <div className="managed-grid-box__header">
              <div className="managed-grid-box__line" />
              <span className="managed-grid-box__title">OUR MANAGED SERVICES</span>
              <div className="managed-grid-box__line" />
            </div>

            {/* 8-Column Grid Layout */}
            <div className="managed-grid-box__wrapper">
              {MANAGED_SERVICES_CARDS.map((srv) => (
                <div key={srv.title} className="managed-card-col">
                  <div className="managed-card-col__icon-wrap">
                    {srv.icon}
                  </div>
                  <h3 className="managed-card-col__title">{srv.title}</h3>
                  <p className="managed-card-col__desc">{srv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* bottom blue banner */}
      <section className="managed-benefits-section">
        <div className="managed-benefits__container">
          <div className="managed-benefits__left">
            <h2 className="managed-benefits__title">THE GOONER ADVANTAGE</h2>
            <div className="managed-benefits__title-line" />
          </div>
          <div className="managed-benefits__right">
            {ADVANTAGE_POINTS.map((bft) => (
              <div key={bft.title} className="advantage-col">
                <div className="advantage-col__icon-wrap">
                  {bft.icon}
                </div>
                <div className="advantage-col__content">
                  <h4 className="advantage-col__title">{bft.title}</h4>
                  <p className="advantage-col__desc">{bft.description}</p>
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
              <span className="cta-photo__eyebrow">Keep Your Finance Systems Running at Their Best</span>
            </div>
            <h2 className="cta-photo__title">
              Let Gooner Technologies Take Care of Your Finance Systems
            </h2>
            <p className="cta-photo__desc">
              Get the expertise, support, and continuous optimization you need to keep your Oracle EPM and NetSuite EPM environment reliable, efficient, and aligned with your business.<br /><br />
              Focus on strategic priorities while our experts manage, support, and continuously improve your finance applications.
            </p>
            <div className="cta-photo__buttons">
              <a href="/#contact-us" className="cta-photo-btn cta-photo-btn--solid">
                Talk to a Managed Services Expert &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
