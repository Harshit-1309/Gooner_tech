import { useCallback } from 'react';
import { Link } from 'react-router-dom';

const SOLUTIONS = [
  {
    id: 'sol-2',
    title: 'Financial Close & Consolidation',
    description: 'Streamline consolidation and financial close while improving control, accuracy, and visibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'sol-3',
    title: 'Account Reconciliation',
    description: 'Automate reconciliation processes and reduce financial risk and manual effort.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 'sol-4',
    title: 'AI-Powered Finance Automation',
    description: 'Use practical AI agents to automate repetitive finance workflows and surface actionable insights.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    id: 'sol-5',
    title: 'Procure-to-Pay Automation',
    description: 'Automate invoice capture, PO matching, approvals, and ERP integration.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    id: 'sol-6',
    title: 'Analytics & Executive Dashboards',
    description: 'Turn financial data into real-time insights through interactive dashboards and decision-ready analytics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function SolutionsSection() {
  const handleCardMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  return (
    <section id="solutions" className="solutions-section" aria-label="Solutions">
      {/* Background Ambient Glows */}
      <div className="solutions-ambient-glow solutions-ambient-glow--left" aria-hidden="true" />
      
      <div className="solutions-container">
        {/* Section Header */}
        <div className="solutions-header">
          <div className="solutions-eyebrow">
            <span className="solutions-eyebrow__dot" />
            <span>FINANCE TRANSFORMATION SOLUTIONS</span>
          </div>
          <h2 className="solutions-title">Solutions Built for Modern Finance</h2>
          <p className="solutions-subtitle">
            From planning and forecasting to financial close, automation, and analytics, we help finance teams modernize the processes that drive better business decisions.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid">
          {/* Featured Solution Card (Large) */}
          <div className="solutions-card solutions-card--featured" onMouseMove={handleCardMouseMove}>
            <div className="solutions-card__spotlight" aria-hidden="true" />
            <div className="solutions-card__top-beam" aria-hidden="true" />
            
            <div className="solutions-card__content-area">
              <div className="solutions-card__header">
                <div className="solutions-card__icon-box solutions-card__icon-box--featured">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="solutions-card__tag">Core Planning</span>
              </div>
              <div className="solutions-card__text-content">
                <h3 className="solutions-card__title">Financial Planning & Budgeting</h3>
                <p className="solutions-card__desc">
                  Connected planning, budgeting, and rolling forecasts designed for faster, more accurate decision-making.
                </p>
                <div className="solutions-card__outcomes">
                  <span className="solutions-card__outcome-pill">✓ Reduce planning cycles</span>
                  <span className="solutions-card__outcome-pill">✓ Multi-entity sync</span>
                </div>
              </div>
              
              <div className="solutions-card__cta">
                <Link to="/contact-us" className="solutions-link-btn">
                  Explore Solution <span>→</span>
                </Link>
              </div>
            </div>

            {/* Featured Visual Dashboard Mockup */}
            <div className="solutions-featured-visual">
              <div className="solutions-dash-mockup">
                <div className="solutions-dash-header">
                  <span className="dot dot-r"></span>
                  <span className="dot dot-y"></span>
                  <span className="dot dot-g"></span>
                </div>
                <div className="solutions-dash-body">
                  <div className="solutions-dash-chart">
                    <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                      <path d="M0,60 L0,30 Q25,10 50,25 T100,15 T150,30 T200,10 L200,60 Z" fill="rgba(56, 142, 255, 0.2)" />
                      <path d="M0,30 Q25,10 50,25 T100,15 T150,30 T200,10" fill="none" stroke="#388eff" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="solutions-dash-bars">
                    <div className="bar" style={{height: '40%'}}></div>
                    <div className="bar" style={{height: '70%'}}></div>
                    <div className="bar" style={{height: '50%'}}></div>
                    <div className="bar" style={{height: '90%'}}></div>
                    <div className="bar" style={{height: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Solution Cards */}
          <div className="solutions-supporting-grid">
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} className="solutions-card solutions-card--supporting" onMouseMove={handleCardMouseMove}>
                <div className="solutions-card__spotlight" aria-hidden="true" />
                <div className="solutions-card__top-beam" aria-hidden="true" />
                
                <div className="solutions-card__icon-box">
                  {sol.icon}
                </div>
                <h3 className="solutions-card__title">{sol.title}</h3>
                <p className="solutions-card__desc">{sol.description}</p>
                <Link to="/contact-us" className="solutions-card__link">
                  Learn more <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
